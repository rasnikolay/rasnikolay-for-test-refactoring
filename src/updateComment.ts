class Some {
  updateComment(comment) {
    const existingComment = this.getComment(comment.id)
    if (existingComment) {
      return this.requestToUpdateComment(comment.id, comment);
    }

    return this.requestToCreateComment(comment);
  }
}

/* Плохо: в if передается слишком много, портится читаемость
*  Улучшено: переменная для if
* */