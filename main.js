Webcam.set({
    width:350,
    height:300,
    image_fomat:'png',
    png_quality:100
    
   
})

camera=document.getElementById("camera")
Webcam.attach(camera)
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';

    })
}
console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ssAfxhAbO/model.json',modelready)
function modelready(){
    console.log("da model haz beeen lodeed")
}
function check()
{
    img=document.getElementById("captured_image")
    classifier.classify(img,gotResults)
}
function gotResults(error,results)
{
    if (error)
    {
        console.error(error)
    }
    else
    {
        console.log(results)
        document.getElementById("result1a").innerHTML=results[0].label
        document.getElementById("result2a").innerHTML=results[1].label
        if(results[0].label=="point"){
            document.getElementById("result1b").innerHTML="&#128071;"
        }
        if(results[0].label=="thumbs up"){
            document.getElementById("result1b").innerHTML="&#128077;"
        }
        if(results[0].label=="punch"){
            document.getElementById("result1b").innerHTML="&#128074;"
        }

        if(results[1].label=="point"){
            document.getElementById("result2b").innerHTML="&#128071;"
        }
        if(results[1].label=="thumbs up"){
            document.getElementById("result2b").innerHTML="&#128077;"
        }
        if(results[1].label=="punch"){
            document.getElementById("result2b").innerHTML="&#128074;"
        }
        
        
    }
}

