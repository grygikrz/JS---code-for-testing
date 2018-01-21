function Quiz_ui(all,current){
  this.all = all;
  this.current = current;
}

Quiz_ui.prototype.progressInfo = function () {

  var progress = 'Question '+ this.current +' of '+ this.all;

  return progress;
};
