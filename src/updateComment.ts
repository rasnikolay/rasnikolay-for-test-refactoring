class Some {
  updateComment(comment) {
    if (this.getComment(comment.id)) {
      return this.requestToUpdateComment(comment.id, comment);
    }

    return this.requestToCreateComment(comment);
  }
}
