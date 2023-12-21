import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
    const canvasRef = useRef(null)

    const drawBack = (ctx) => {
        var i, j;
        for(i = 0; i < 8; i++){
            for(j = 0; j < 8; j++){
                if(((i*7) + j) % 2 === 0){
                    ctx.fillStyle = "rgb(210, 7, 7)";
                } else {
                    ctx.fillStyle = "white"
                }
                ctx.fillRect((ctx.canvas.width/8)*i, (ctx.canvas.height/8)*j, (ctx.canvas.width/8), (ctx.canvas.height/8));
            }
        }
    }
    
    const draw = (ctx, frameCount) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      drawBack(ctx)
      ctx.fillStyle = '#000000'
      ctx.fill()
    }
    
    useEffect(() => {
      
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId
      
        //Our draw came here
        const render = () => {
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
    
        render()
      
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    })

    const moveHandler = (e) => {
        console.log(e)
    }
    
    return <canvas onMouseMove={e => moveHandler(e)} onMouseDown={e => console.log(e)}
                   height={Math.round(window.innerHeight*(6/9))} width={Math.round(window.innerWidth*(1/2))}
                   ref={canvasRef} style={{border: "1px solid black"}} {...props}/>
  }

const Fun = () => {
    return (
        <div className='has-text-centered mt-4'>
            <Canvas />
        </div>
    )
}

export default Fun;