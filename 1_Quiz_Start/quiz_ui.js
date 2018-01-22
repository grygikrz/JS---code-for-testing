function Quiz_ui(){
  this.all = 0;
  this.current = 0;
}

Quiz_ui.prototype.setInfo = function (all,current) {
    this.all = all;
    this.current = current;
};

Quiz_ui.prototype.progressInfo = function () {

  var progress = 'Question '+ this.current +' of '+ this.all;

  return progress;
};
