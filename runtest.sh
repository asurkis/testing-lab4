cd $1
rm -rf samples.csv log.log out
mkdir out
/hdd/homework/testing/apache-jmeter-5.4.1/bin/jmeter -n -t test.jmx -j log.log -l samples.csv -e -o out -q ../jmeter.properties
cd ..
