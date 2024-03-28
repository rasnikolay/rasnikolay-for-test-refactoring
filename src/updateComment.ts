class Some {
  updateComment(comment) {
    if (this.getComment(comment.id)) {
      return this.updateComment(comment.id, comment);
    }
  
    return this.createComment(comment);
  }
}
