# iremedy
Tested on OS X, Ubuntu 18.04, Raspbian with Node 10.x & 11.x (Firefox and Chrome)
## Setup
Clone the repo
```
git clone https://github.com/zohan/iremedy.git
```

## Install the project
```
cd iremedy
sudo npm install
```

## Run the project

```
sudo npm start
```

* Open `http://localhost:3000` on Firefox or Chrome.
* Wait for recognizer to be ready
* Select a grammar from dropdown (align, words, neighbors)
* Press 'Start' and utter "What's your name", then press 'Stop'
* Results (detected symbols, normalized acoustic scores, duration) will be displayed under the heading "Recognition Output".