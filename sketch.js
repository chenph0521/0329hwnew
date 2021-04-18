// STEP 1: mount 1 time
let video; // 宣告影像
let classifier;
let txtcontent='';
function preload(){
  classifier = ml5.imageClassifier('./model/'+'model.json');// load model data
  img = loadImage('hi.jpg')
  img2 = loadImage('hey.jpg')
}

function setup() {
  createCanvas(1126, 750); // 畫面大小
  video = createCapture(VIDEO); //擷取畫面
  video.hide();  //隱藏畫面
  classifyVideo();
  // 定義字體
  textSize(80);
  textAlign(CENTER, CENTER);
}
// STEP 2: classify , and update repeatedly
function classifyVideo(){
  classifier.classify(video, getResult); // 開始判斷並取得結果
} 
function draw() {
  background(220); // 背景顏色
  image(img, 0, 0,1126, 750);
  image(video, 0, 0,260,200); // 放置video內容
  ele = createAudio('hey.mp3')
  
  // STEP 3: some lable on canvas

  if (txtcontent == "hey"){
    image(img2, 0, 0,1126, 750);
    image(video, 0, 0,260,200);
    ele.autoplay(true);

    
  }
}
// STEP 4: load classification!
function getResult(error, results){
  if (error){ // 若有問題列印結果
    console.error(error);
    return;
  }
  //若沒問題 執行
  console.log(results[0]); //第一個物件是AI判斷最接近的class
  txtcontent = results[0].label; // 取得txtcontent
  classifyVideo();
}