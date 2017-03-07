
If you face the problem below


``````Determining test suites to run...

2016-10-30 15:28 node[763] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
2016-10-30 15:28 node[763] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
2016-10-30 15:28 node[763] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: Error watching file for changes: EMFILE
    at exports._errnoException (util.js:1026:11)
    at FSEvent.FSWatcher._handle.onchange (fs.js:1406:11)
npm ERR! Test failed.  See above for more details.

````````
````````

Please checkout this link =>>

https://github.com/facebook/react-native/issues/9309#issuecomment-238966924

===========================

Credit to @passwd for figuring this out

We were able to get it to work by increasing the max file limit and moving to watchman v4.6.0

here are the steps we followed:

1. increase max file limt

# check open file limit
sysctl kern.maxfiles

# edit sysctl
sudo vim /etc/sysctl.conf

# add these two lines
kern.maxfiles=10485760
kern.maxfilesperproc=1048576

# reboot
sudo reboot

# check new file limit
sysctl kern.maxfiles
2. upgrade to watchman 4.6

# clone repo
git clone https://github.com/facebook/watchman.git

# change to master branch
git checkout -b v4.6.0 v4.6.0

# run compiler
./autogen.sh
./configure --enable-lenient --without-pcre --with-python
make
sudo make install

# check watchman version
watchman -v

# result should be 4.6.0


===========================