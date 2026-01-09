"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  width?: number
  height?: number
  className?: string
  maxOpacity?: number
}

// Check if device is mobile/low-power for performance optimization
const isMobileDevice = typeof window !== 'undefined' && (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
  window.matchMedia('(max-width: 768px)').matches
)

// Reduce animation intensity on mobile for better performance
const MOBILE_FLICKER_MULTIPLIER = 0.3
const MOBILE_FRAME_SKIP = 2 // Only update every nth frame on mobile

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(0, 0, 0)",
  width,
  height,
  className,
  maxOpacity = 0.3,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })
  const frameCountRef = useRef(0)

  // Adjust flicker chance for mobile performance
  const effectiveFlickerChance = isMobileDevice 
    ? flickerChance * MOBILE_FLICKER_MULTIPLIER 
    : flickerChance

  const memoizedColor = useMemo(() => {
    const toRGBA = (color: string) => {
      if (typeof window === "undefined") {
        return `rgba(0, 0, 0,`
      }
      const canvas = document.createElement("canvas")
      canvas.width = canvas.height = 1
      const ctx = canvas.getContext("2d")
      if (!ctx) return "rgba(255, 0, 0,"
      ctx.fillStyle = color
      ctx.fillRect(0, 0, 1, 1)
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data)
      return `rgba(${r}, ${g}, ${b},`
    }
    return toRGBA(color)
  }, [color])

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      // Use lower DPR on mobile for performance
      const baseDpr = window.devicePixelRatio || 1
      const dpr = isMobileDevice ? Math.min(baseDpr, 1.5) : baseDpr
      
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      
      // Use larger squares on mobile for fewer draw calls
      const effectiveSquareSize = isMobileDevice ? squareSize * 1.5 : squareSize
      const effectiveGridGap = isMobileDevice ? gridGap * 1.5 : gridGap
      
      const cols = Math.floor(width / (effectiveSquareSize + effectiveGridGap))
      const rows = Math.floor(height / (effectiveSquareSize + effectiveGridGap))

      const squares = new Float32Array(cols * rows)
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity
      }

      return { cols, rows, squares, dpr, effectiveSquareSize, effectiveGridGap }
    },
    [squareSize, gridGap, maxOpacity]
  )

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < effectiveFlickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity
        }
      }
    },
    [effectiveFlickerChance, maxOpacity]
  )

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number,
      effectiveSquareSize: number,
      effectiveGridGap: number
    ) => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const opacity = squares[i * rows + j]
          ctx.fillStyle = `${memoizedColor}${opacity})`
          ctx.fillRect(
            i * (effectiveSquareSize + effectiveGridGap) * dpr,
            j * (effectiveSquareSize + effectiveGridGap) * dpr,
            effectiveSquareSize * dpr,
            effectiveSquareSize * dpr
          )
        }
      }
    },
    [memoizedColor]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let gridParams: ReturnType<typeof setupCanvas>

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth
      const newHeight = height || container.clientHeight
      setCanvasSize({ width: newWidth, height: newHeight })
      gridParams = setupCanvas(canvas, newWidth, newHeight)
    }

    updateCanvasSize()

    let lastTime = 0
    const animate = (time: number) => {
      if (!isInView) return

      frameCountRef.current++
      
      // Skip frames on mobile for performance
      if (isMobileDevice && frameCountRef.current % MOBILE_FRAME_SKIP !== 0) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }

      const deltaTime = (time - lastTime) / 1000
      lastTime = time

      updateSquares(gridParams.squares, deltaTime)
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr,
        gridParams.effectiveSquareSize,
        gridParams.effectiveGridGap
      )
      animationFrameId = requestAnimationFrame(animate)
    }

    // Debounce resize for performance
    let resizeTimeout: NodeJS.Timeout
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(updateCanvasSize, 100)
    })

    resizeObserver.observe(container)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    intersectionObserver.observe(canvas)

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      clearTimeout(resizeTimeout)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView])

  return (
    <div
      ref={containerRef}
      className={cn("h-full w-full", className)}
      style={{ willChange: 'transform', contain: 'layout paint' }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
          willChange: 'contents',
        }}
      />
    </div>
  )
}
