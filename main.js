import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';

const parser = new WMTSCapabilities();

fetch('data/wmts.xml')
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    const result = parser.read(text);
    console.log('foo3e3ded4');
    document.getElementById('log').innerText = JSON.stringify(result, null, 2);
  });
