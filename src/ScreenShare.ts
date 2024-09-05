class ScreenShare {
  startPresentationWithoutSound(mediaStream: MediaStream, isExistsAudioTracks: boolean) {
    this.stopPresentation();

    this.startPresentation(mediaStream);

    if (isExistsAudioTracks) {
      this.muteAudio();
    }
  }

  stopPresentation() {}
  startPresentation(mediaStream: MediaStream) {}
  muteAudio() {}
}
