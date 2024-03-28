class ScreenShare {
  startPresentationWithoutSound(mediaStream: MediaStream) {
    this.stopPresentation();

    this.startPresentation(mediaStream);

    const isExistsAudioTracks = mediaStream.getAudioTracks().length > 0;

    if (isExistsAudioTracks) {
      this.muteAudio();
    }
  }

  stopPresentation() { 
  }
  startPresentation(mediaStream: MediaStream) { 
  }
  muteAudio() { 
  }
}
