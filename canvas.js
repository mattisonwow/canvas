console.log(document.getElementById("xxx"))
autoSetCanvasSize(canvas)

function autoSetCanvasSize(canvas){
    setCanvasSize()

    window.onresize = function(){
        setCanvasSize()
    }
    function setCanvasSize(){
        var pageWidth = document.documentElement.clientWidth
        console.log(pageWidth)
        var pageHeight = document.documentElement.clientHeight
        console.log(pageHeight)
        canvas.height = pageHeight
        canvas.width = pageWidth
    }
}