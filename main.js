function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9DrVP1Cab/model.json',modelReady);
}
function modelReady(){
    Classifier.classify(gotResults);
}
function gotResults(error,result){
    console.log('Got Result');
}