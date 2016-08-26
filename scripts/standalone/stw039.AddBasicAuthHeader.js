// http://www.pupha.net/archives/2654/
// Add the listener which has HttpSenderListener interface to HttpSender
org.parosproxy.paros.network.HttpSender.addListener(
  new org.zaproxy.zap.network.HttpSenderListener {
    getListenerOrder: function() {
      return 1;
    },

    // Called before HTTP request
    onHttpRequestSend: function(msg, initiator) {
    var params = msg.getUrlParams();
    for (var i = 0; i < params.length; i++) {
        print("value.getName()" + value.getName());
    }

      // Add the original header to HTTP request header of message object
      msg.getRequestHeader().setHeader(
        "Authorization", "Basic c3R3MDM5YmFzaWM6c3R3MDM5YmFzaWM=");
    },

    // Called before HTTP response
    onHttpResponseReceive: function(msg, initiator) {
    }
});
