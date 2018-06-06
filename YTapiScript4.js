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
for(var s=0; s<=5; s++){
  $('#R'+s)
  .html("<a href='https://www.youtube.com/watch?v=" + data[s].id.videoId +"'><img src='"+data[s].snippet.thumbnails.medium.url + "'>" + data[s].snippet.title +"</a>" );
};
};

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

};
