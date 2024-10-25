type TFormatType = 'bytes' | 'Mb';

class StatisticsCollector {
  sentUserVideoTraffic=0;
  sentShareVideoTraffic=0;
  isActiveAutoFormatTraffic=false;
  getSentVideoTraffic() {
    const sentVideoTrafficInBytes = this.sentUserVideoTraffic + this.sentShareVideoTraffic;
    const formatType = this.isActiveAutoFormatTraffic ? 'Mb' : 'bytes';

    return this.formatTraffic(sentVideoTrafficInBytes, formatType);
  }

  formatTraffic(trafficInBytes: number, formatType: TFormatType) {
    switch (formatType) {
      case 'bytes':
        return trafficInBytes;
      case 'Mb':
        return trafficInBytes / 1_048_576;
    }
  }
}

/* если у нас TFormatType всего 2 значение имеет, то логика switch избыточна */