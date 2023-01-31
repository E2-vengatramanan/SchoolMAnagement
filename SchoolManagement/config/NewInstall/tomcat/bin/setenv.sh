export JAVA_HOME=/usr/java/jdk1.6.0_26/
export CATALINA_OPTS="$CATALINA_OPTS -Xms2048m"
export CATALINA_OPTS="$CATALINA_OPTS -Xmx2048m"
export CATALINA_OPTS="$CATALINA_OPTS -XX:MaxPermSize=512m"
export CATALINA_OPTS="$CATALINA_OPTS -Dsun.rmi.dgc.client.gcInterval=3600000"
export CATALINA_OPTS="$CATALINA_OPTS -Dsun.rmi.dgc.server.gcInterval=3600000"
export CATALINA_OPTS="$CATALINA_OPTS -Dcatie.home=/home/CATIE_DATA"
export CATALINA_OPTS="$CATALINA_OPTS -Dapp.home=/home/APP_DATA"