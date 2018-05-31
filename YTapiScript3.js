/*the api key for this project is:
AIzaSyByr9m5T8auwAoNTkeApk-9sLFwM3ycOBo*/
// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#seek').attr('disabled', false);
}
$('#seek').click(function(){
  search();

});
function Store(data){
  //query data storage-video titles and videoId's
  var tI0 = data[0].snippet.title;
  var vI0 = data[0].id.videoId; 
  var tI01 = data[1].snippet.title;
  var vI01 = data[1].id.videoId;
  var tI02 = data[2].snippet.title;
  var vI02 = data[2].id.videoId;
  var tI03 = data[3].snippet.title;
  var vI03 = data[3].id.videoId;
  var tI04 = data[4].snippet.title;
  var vI04 = data[4].id.videoId;
  //query data storage- thumbnails
  var iM0 = data[0].snippet.thumbnails.medium.url;
  var iM1 = data[1].snippet.thumbnails.medium.url;
  var iM2 = data[2].snippet.thumbnails.medium.url;
  var iM3 = data[3].snippet.thumbnails.medium.url;
  var iM4 = data[4].snippet.thumbnails.medium.url;
//html displays
  $('#R1')
  //<img src="xyz\abc.jpg">
  .html("<a href='https://www.youtube.com/watch?v=" + vI0 + "'><img src='"+ iM0 +"'>"+ tI0 +" </a>");
  $('#R2')
  .html("<a href='https://www.youtube.com/watch?v=" + vI01 + "'><img src='"+ iM1 +"'>" + tI01 +" </a>");
  $('#R3')
  .html("<a href='https://www.youtube.com/watch?v=" + vI02 + "'><img src='"+ iM2 +"'>" + tI02 +" </a>");
  $('#R4')
  .html("<a href='https://www.youtube.com/watch?v=" + vI03 + "'><img src='"+ iM3 +"'>" + tI03 +" </a>");
  $('#R5')
  .html("<a href='https://www.youtube.com/watch?v=" + vI04 + "'><img src='"+ iM4 +"'>" + tI04 +" </a>");

}
// Search for a specified string.
function search() {
  var q = $('#desire').val();
    $.getJSON('https://www.googleapis.com/youtube/v3/search',{
    q: q,
    part: 'snippet',
    key:'AIzaSyByr9m5T8auwAoNTkeApk-9sLFwM3ycOBo',
    type:'video'
  },
  function(data){
  console.log(data.items);
  Store(data.items);
});

}
