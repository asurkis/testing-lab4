cd $1
rm -rf samples.csv log.log out
mkdir out
jmeter -n -t test.jmx -j log.log -l samples.csv -e -o out -q ../jmeter.properties
cd ..
