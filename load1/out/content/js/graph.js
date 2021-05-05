/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 438.0, "minX": 0.0, "maxY": 572.0, "series": [{"data": [[0.0, 438.0], [0.1, 438.0], [0.2, 438.0], [0.3, 439.0], [0.4, 439.0], [0.5, 439.0], [0.6, 440.0], [0.7, 440.0], [0.8, 440.0], [0.9, 443.0], [1.0, 443.0], [1.1, 443.0], [1.2, 443.0], [1.3, 443.0], [1.4, 443.0], [1.5, 444.0], [1.6, 444.0], [1.7, 444.0], [1.8, 444.0], [1.9, 444.0], [2.0, 444.0], [2.1, 447.0], [2.2, 447.0], [2.3, 447.0], [2.4, 447.0], [2.5, 447.0], [2.6, 447.0], [2.7, 448.0], [2.8, 448.0], [2.9, 449.0], [3.0, 449.0], [3.1, 449.0], [3.2, 449.0], [3.3, 449.0], [3.4, 449.0], [3.5, 449.0], [3.6, 449.0], [3.7, 449.0], [3.8, 450.0], [3.9, 450.0], [4.0, 450.0], [4.1, 451.0], [4.2, 451.0], [4.3, 451.0], [4.4, 451.0], [4.5, 451.0], [4.6, 451.0], [4.7, 451.0], [4.8, 451.0], [4.9, 451.0], [5.0, 452.0], [5.1, 452.0], [5.2, 452.0], [5.3, 452.0], [5.4, 452.0], [5.5, 453.0], [5.6, 453.0], [5.7, 453.0], [5.8, 454.0], [5.9, 454.0], [6.0, 454.0], [6.1, 454.0], [6.2, 454.0], [6.3, 454.0], [6.4, 454.0], [6.5, 454.0], [6.6, 454.0], [6.7, 455.0], [6.8, 455.0], [6.9, 455.0], [7.0, 455.0], [7.1, 455.0], [7.2, 455.0], [7.3, 455.0], [7.4, 455.0], [7.5, 455.0], [7.6, 457.0], [7.7, 457.0], [7.8, 457.0], [7.9, 457.0], [8.0, 457.0], [8.1, 458.0], [8.2, 458.0], [8.3, 458.0], [8.4, 459.0], [8.5, 459.0], [8.6, 459.0], [8.7, 459.0], [8.8, 459.0], [8.9, 459.0], [9.0, 459.0], [9.1, 459.0], [9.2, 459.0], [9.3, 459.0], [9.4, 459.0], [9.5, 459.0], [9.6, 459.0], [9.7, 459.0], [9.8, 459.0], [9.9, 459.0], [10.0, 459.0], [10.1, 459.0], [10.2, 459.0], [10.3, 459.0], [10.4, 459.0], [10.5, 460.0], [10.6, 460.0], [10.7, 460.0], [10.8, 460.0], [10.9, 460.0], [11.0, 461.0], [11.1, 461.0], [11.2, 461.0], [11.3, 461.0], [11.4, 461.0], [11.5, 461.0], [11.6, 461.0], [11.7, 461.0], [11.8, 461.0], [11.9, 462.0], [12.0, 462.0], [12.1, 462.0], [12.2, 462.0], [12.3, 462.0], [12.4, 462.0], [12.5, 462.0], [12.6, 462.0], [12.7, 462.0], [12.8, 462.0], [12.9, 462.0], [13.0, 462.0], [13.1, 462.0], [13.2, 462.0], [13.3, 463.0], [13.4, 463.0], [13.5, 463.0], [13.6, 464.0], [13.7, 464.0], [13.8, 464.0], [13.9, 464.0], [14.0, 464.0], [14.1, 464.0], [14.2, 465.0], [14.3, 465.0], [14.4, 465.0], [14.5, 465.0], [14.6, 465.0], [14.7, 465.0], [14.8, 465.0], [14.9, 465.0], [15.0, 465.0], [15.1, 465.0], [15.2, 465.0], [15.3, 465.0], [15.4, 466.0], [15.5, 466.0], [15.6, 466.0], [15.7, 467.0], [15.8, 467.0], [15.9, 467.0], [16.0, 467.0], [16.1, 467.0], [16.2, 467.0], [16.3, 467.0], [16.4, 467.0], [16.5, 467.0], [16.6, 467.0], [16.7, 467.0], [16.8, 468.0], [16.9, 468.0], [17.0, 468.0], [17.1, 468.0], [17.2, 468.0], [17.3, 468.0], [17.4, 469.0], [17.5, 469.0], [17.6, 469.0], [17.7, 469.0], [17.8, 469.0], [17.9, 469.0], [18.0, 470.0], [18.1, 470.0], [18.2, 470.0], [18.3, 470.0], [18.4, 470.0], [18.5, 470.0], [18.6, 470.0], [18.7, 470.0], [18.8, 470.0], [18.9, 470.0], [19.0, 470.0], [19.1, 470.0], [19.2, 470.0], [19.3, 470.0], [19.4, 470.0], [19.5, 470.0], [19.6, 470.0], [19.7, 471.0], [19.8, 471.0], [19.9, 471.0], [20.0, 471.0], [20.1, 471.0], [20.2, 471.0], [20.3, 471.0], [20.4, 471.0], [20.5, 471.0], [20.6, 471.0], [20.7, 471.0], [20.8, 471.0], [20.9, 471.0], [21.0, 471.0], [21.1, 472.0], [21.2, 472.0], [21.3, 472.0], [21.4, 472.0], [21.5, 472.0], [21.6, 472.0], [21.7, 472.0], [21.8, 472.0], [21.9, 472.0], [22.0, 473.0], [22.1, 473.0], [22.2, 473.0], [22.3, 473.0], [22.4, 473.0], [22.5, 473.0], [22.6, 474.0], [22.7, 474.0], [22.8, 474.0], [22.9, 474.0], [23.0, 474.0], [23.1, 474.0], [23.2, 474.0], [23.3, 474.0], [23.4, 474.0], [23.5, 474.0], [23.6, 474.0], [23.7, 474.0], [23.8, 474.0], [23.9, 474.0], [24.0, 475.0], [24.1, 475.0], [24.2, 475.0], [24.3, 476.0], [24.4, 476.0], [24.5, 476.0], [24.6, 476.0], [24.7, 476.0], [24.8, 476.0], [24.9, 476.0], [25.0, 476.0], [25.1, 476.0], [25.2, 476.0], [25.3, 476.0], [25.4, 476.0], [25.5, 476.0], [25.6, 476.0], [25.7, 476.0], [25.8, 476.0], [25.9, 476.0], [26.0, 476.0], [26.1, 477.0], [26.2, 477.0], [26.3, 477.0], [26.4, 477.0], [26.5, 477.0], [26.6, 477.0], [26.7, 477.0], [26.8, 477.0], [26.9, 477.0], [27.0, 477.0], [27.1, 477.0], [27.2, 477.0], [27.3, 477.0], [27.4, 477.0], [27.5, 477.0], [27.6, 477.0], [27.7, 477.0], [27.8, 478.0], [27.9, 478.0], [28.0, 478.0], [28.1, 479.0], [28.2, 479.0], [28.3, 479.0], [28.4, 479.0], [28.5, 479.0], [28.6, 479.0], [28.7, 479.0], [28.8, 479.0], [28.9, 479.0], [29.0, 479.0], [29.1, 479.0], [29.2, 479.0], [29.3, 479.0], [29.4, 479.0], [29.5, 480.0], [29.6, 480.0], [29.7, 480.0], [29.8, 480.0], [29.9, 480.0], [30.0, 480.0], [30.1, 480.0], [30.2, 480.0], [30.3, 480.0], [30.4, 480.0], [30.5, 480.0], [30.6, 480.0], [30.7, 480.0], [30.8, 480.0], [30.9, 480.0], [31.0, 481.0], [31.1, 481.0], [31.2, 481.0], [31.3, 481.0], [31.4, 481.0], [31.5, 481.0], [31.6, 482.0], [31.7, 482.0], [31.8, 482.0], [31.9, 482.0], [32.0, 482.0], [32.1, 482.0], [32.2, 482.0], [32.3, 482.0], [32.4, 483.0], [32.5, 483.0], [32.6, 483.0], [32.7, 484.0], [32.8, 484.0], [32.9, 484.0], [33.0, 484.0], [33.1, 484.0], [33.2, 484.0], [33.3, 484.0], [33.4, 484.0], [33.5, 484.0], [33.6, 485.0], [33.7, 485.0], [33.8, 485.0], [33.9, 485.0], [34.0, 485.0], [34.1, 485.0], [34.2, 485.0], [34.3, 485.0], [34.4, 485.0], [34.5, 485.0], [34.6, 485.0], [34.7, 485.0], [34.8, 485.0], [34.9, 485.0], [35.0, 485.0], [35.1, 485.0], [35.2, 485.0], [35.3, 485.0], [35.4, 485.0], [35.5, 485.0], [35.6, 485.0], [35.7, 485.0], [35.8, 485.0], [35.9, 486.0], [36.0, 486.0], [36.1, 486.0], [36.2, 486.0], [36.3, 486.0], [36.4, 486.0], [36.5, 486.0], [36.6, 486.0], [36.7, 486.0], [36.8, 486.0], [36.9, 486.0], [37.0, 486.0], [37.1, 486.0], [37.2, 486.0], [37.3, 487.0], [37.4, 487.0], [37.5, 487.0], [37.6, 487.0], [37.7, 487.0], [37.8, 487.0], [37.9, 487.0], [38.0, 487.0], [38.1, 487.0], [38.2, 487.0], [38.3, 487.0], [38.4, 487.0], [38.5, 487.0], [38.6, 487.0], [38.7, 487.0], [38.8, 487.0], [38.9, 487.0], [39.0, 487.0], [39.1, 487.0], [39.2, 487.0], [39.3, 487.0], [39.4, 488.0], [39.5, 488.0], [39.6, 488.0], [39.7, 488.0], [39.8, 488.0], [39.9, 489.0], [40.0, 489.0], [40.1, 489.0], [40.2, 489.0], [40.3, 489.0], [40.4, 489.0], [40.5, 489.0], [40.6, 489.0], [40.7, 489.0], [40.8, 489.0], [40.9, 489.0], [41.0, 489.0], [41.1, 490.0], [41.2, 490.0], [41.3, 490.0], [41.4, 490.0], [41.5, 490.0], [41.6, 490.0], [41.7, 490.0], [41.8, 490.0], [41.9, 490.0], [42.0, 490.0], [42.1, 490.0], [42.2, 490.0], [42.3, 490.0], [42.4, 490.0], [42.5, 491.0], [42.6, 491.0], [42.7, 491.0], [42.8, 491.0], [42.9, 491.0], [43.0, 491.0], [43.1, 491.0], [43.2, 491.0], [43.3, 491.0], [43.4, 491.0], [43.5, 491.0], [43.6, 491.0], [43.7, 492.0], [43.8, 492.0], [43.9, 492.0], [44.0, 492.0], [44.1, 492.0], [44.2, 492.0], [44.3, 492.0], [44.4, 492.0], [44.5, 492.0], [44.6, 492.0], [44.7, 492.0], [44.8, 493.0], [44.9, 493.0], [45.0, 493.0], [45.1, 493.0], [45.2, 493.0], [45.3, 493.0], [45.4, 494.0], [45.5, 494.0], [45.6, 494.0], [45.7, 494.0], [45.8, 494.0], [45.9, 494.0], [46.0, 494.0], [46.1, 494.0], [46.2, 494.0], [46.3, 495.0], [46.4, 495.0], [46.5, 495.0], [46.6, 495.0], [46.7, 495.0], [46.8, 495.0], [46.9, 495.0], [47.0, 495.0], [47.1, 495.0], [47.2, 495.0], [47.3, 495.0], [47.4, 495.0], [47.5, 495.0], [47.6, 495.0], [47.7, 496.0], [47.8, 496.0], [47.9, 496.0], [48.0, 496.0], [48.1, 496.0], [48.2, 496.0], [48.3, 496.0], [48.4, 496.0], [48.5, 496.0], [48.6, 496.0], [48.7, 496.0], [48.8, 496.0], [48.9, 497.0], [49.0, 497.0], [49.1, 497.0], [49.2, 497.0], [49.3, 497.0], [49.4, 497.0], [49.5, 497.0], [49.6, 497.0], [49.7, 497.0], [49.8, 497.0], [49.9, 497.0], [50.0, 497.0], [50.1, 497.0], [50.2, 497.0], [50.3, 497.0], [50.4, 497.0], [50.5, 497.0], [50.6, 498.0], [50.7, 498.0], [50.8, 498.0], [50.9, 498.0], [51.0, 498.0], [51.1, 498.0], [51.2, 498.0], [51.3, 498.0], [51.4, 498.0], [51.5, 498.0], [51.6, 498.0], [51.7, 498.0], [51.8, 499.0], [51.9, 499.0], [52.0, 499.0], [52.1, 499.0], [52.2, 499.0], [52.3, 499.0], [52.4, 499.0], [52.5, 499.0], [52.6, 499.0], [52.7, 499.0], [52.8, 499.0], [52.9, 500.0], [53.0, 500.0], [53.1, 500.0], [53.2, 500.0], [53.3, 500.0], [53.4, 500.0], [53.5, 500.0], [53.6, 500.0], [53.7, 500.0], [53.8, 500.0], [53.9, 500.0], [54.0, 500.0], [54.1, 501.0], [54.2, 501.0], [54.3, 501.0], [54.4, 501.0], [54.5, 501.0], [54.6, 501.0], [54.7, 501.0], [54.8, 501.0], [54.9, 501.0], [55.0, 502.0], [55.1, 502.0], [55.2, 502.0], [55.3, 502.0], [55.4, 502.0], [55.5, 502.0], [55.6, 502.0], [55.7, 502.0], [55.8, 502.0], [55.9, 502.0], [56.0, 502.0], [56.1, 502.0], [56.2, 502.0], [56.3, 502.0], [56.4, 502.0], [56.5, 502.0], [56.6, 502.0], [56.7, 502.0], [56.8, 502.0], [56.9, 502.0], [57.0, 502.0], [57.1, 502.0], [57.2, 502.0], [57.3, 503.0], [57.4, 503.0], [57.5, 503.0], [57.6, 503.0], [57.7, 503.0], [57.8, 503.0], [57.9, 503.0], [58.0, 503.0], [58.1, 503.0], [58.2, 503.0], [58.3, 503.0], [58.4, 503.0], [58.5, 503.0], [58.6, 503.0], [58.7, 503.0], [58.8, 503.0], [58.9, 503.0], [59.0, 503.0], [59.1, 503.0], [59.2, 503.0], [59.3, 504.0], [59.4, 504.0], [59.5, 504.0], [59.6, 504.0], [59.7, 504.0], [59.8, 504.0], [59.9, 504.0], [60.0, 504.0], [60.1, 504.0], [60.2, 504.0], [60.3, 504.0], [60.4, 504.0], [60.5, 504.0], [60.6, 504.0], [60.7, 504.0], [60.8, 504.0], [60.9, 504.0], [61.0, 505.0], [61.1, 505.0], [61.2, 505.0], [61.3, 507.0], [61.4, 507.0], [61.5, 507.0], [61.6, 507.0], [61.7, 507.0], [61.8, 507.0], [61.9, 507.0], [62.0, 507.0], [62.1, 507.0], [62.2, 507.0], [62.3, 507.0], [62.4, 507.0], [62.5, 507.0], [62.6, 507.0], [62.7, 507.0], [62.8, 507.0], [62.9, 507.0], [63.0, 507.0], [63.1, 507.0], [63.2, 507.0], [63.3, 507.0], [63.4, 507.0], [63.5, 507.0], [63.6, 508.0], [63.7, 508.0], [63.8, 508.0], [63.9, 508.0], [64.0, 508.0], [64.1, 508.0], [64.2, 508.0], [64.3, 508.0], [64.4, 508.0], [64.5, 508.0], [64.6, 508.0], [64.7, 508.0], [64.8, 508.0], [64.9, 508.0], [65.0, 508.0], [65.1, 509.0], [65.2, 509.0], [65.3, 509.0], [65.4, 509.0], [65.5, 509.0], [65.6, 509.0], [65.7, 509.0], [65.8, 509.0], [65.9, 510.0], [66.0, 510.0], [66.1, 510.0], [66.2, 510.0], [66.3, 510.0], [66.4, 510.0], [66.5, 510.0], [66.6, 510.0], [66.7, 510.0], [66.8, 510.0], [66.9, 510.0], [67.0, 510.0], [67.1, 510.0], [67.2, 510.0], [67.3, 510.0], [67.4, 510.0], [67.5, 510.0], [67.6, 510.0], [67.7, 510.0], [67.8, 510.0], [67.9, 510.0], [68.0, 510.0], [68.1, 510.0], [68.2, 510.0], [68.3, 510.0], [68.4, 510.0], [68.5, 510.0], [68.6, 510.0], [68.7, 510.0], [68.8, 510.0], [68.9, 510.0], [69.0, 510.0], [69.1, 510.0], [69.2, 510.0], [69.3, 510.0], [69.4, 511.0], [69.5, 511.0], [69.6, 511.0], [69.7, 511.0], [69.8, 511.0], [69.9, 511.0], [70.0, 511.0], [70.1, 511.0], [70.2, 511.0], [70.3, 512.0], [70.4, 512.0], [70.5, 512.0], [70.6, 512.0], [70.7, 512.0], [70.8, 512.0], [70.9, 512.0], [71.0, 512.0], [71.1, 512.0], [71.2, 512.0], [71.3, 512.0], [71.4, 512.0], [71.5, 512.0], [71.6, 512.0], [71.7, 512.0], [71.8, 512.0], [71.9, 512.0], [72.0, 512.0], [72.1, 512.0], [72.2, 512.0], [72.3, 513.0], [72.4, 513.0], [72.5, 513.0], [72.6, 513.0], [72.7, 513.0], [72.8, 513.0], [72.9, 513.0], [73.0, 513.0], [73.1, 513.0], [73.2, 514.0], [73.3, 514.0], [73.4, 514.0], [73.5, 514.0], [73.6, 514.0], [73.7, 514.0], [73.8, 514.0], [73.9, 514.0], [74.0, 515.0], [74.1, 515.0], [74.2, 515.0], [74.3, 515.0], [74.4, 515.0], [74.5, 515.0], [74.6, 515.0], [74.7, 515.0], [74.8, 515.0], [74.9, 515.0], [75.0, 515.0], [75.1, 515.0], [75.2, 515.0], [75.3, 515.0], [75.4, 515.0], [75.5, 515.0], [75.6, 515.0], [75.7, 515.0], [75.8, 515.0], [75.9, 515.0], [76.0, 515.0], [76.1, 515.0], [76.2, 515.0], [76.3, 515.0], [76.4, 516.0], [76.5, 516.0], [76.6, 516.0], [76.7, 516.0], [76.8, 516.0], [76.9, 516.0], [77.0, 516.0], [77.1, 516.0], [77.2, 516.0], [77.3, 516.0], [77.4, 516.0], [77.5, 516.0], [77.6, 516.0], [77.7, 516.0], [77.8, 516.0], [77.9, 516.0], [78.0, 516.0], [78.1, 517.0], [78.2, 517.0], [78.3, 517.0], [78.4, 517.0], [78.5, 517.0], [78.6, 517.0], [78.7, 517.0], [78.8, 517.0], [78.9, 517.0], [79.0, 517.0], [79.1, 517.0], [79.2, 517.0], [79.3, 517.0], [79.4, 517.0], [79.5, 518.0], [79.6, 518.0], [79.7, 518.0], [79.8, 518.0], [79.9, 518.0], [80.0, 518.0], [80.1, 518.0], [80.2, 518.0], [80.3, 518.0], [80.4, 519.0], [80.5, 519.0], [80.6, 519.0], [80.7, 519.0], [80.8, 519.0], [80.9, 519.0], [81.0, 519.0], [81.1, 519.0], [81.2, 519.0], [81.3, 520.0], [81.4, 520.0], [81.5, 520.0], [81.6, 520.0], [81.7, 520.0], [81.8, 520.0], [81.9, 520.0], [82.0, 520.0], [82.1, 521.0], [82.2, 521.0], [82.3, 521.0], [82.4, 521.0], [82.5, 521.0], [82.6, 521.0], [82.7, 521.0], [82.8, 521.0], [82.9, 521.0], [83.0, 521.0], [83.1, 521.0], [83.2, 521.0], [83.3, 521.0], [83.4, 521.0], [83.5, 521.0], [83.6, 521.0], [83.7, 521.0], [83.8, 521.0], [83.9, 522.0], [84.0, 522.0], [84.1, 522.0], [84.2, 522.0], [84.3, 522.0], [84.4, 522.0], [84.5, 522.0], [84.6, 522.0], [84.7, 522.0], [84.8, 522.0], [84.9, 522.0], [85.0, 522.0], [85.1, 522.0], [85.2, 522.0], [85.3, 522.0], [85.4, 522.0], [85.5, 522.0], [85.6, 522.0], [85.7, 522.0], [85.8, 522.0], [85.9, 523.0], [86.0, 523.0], [86.1, 523.0], [86.2, 523.0], [86.3, 523.0], [86.4, 523.0], [86.5, 523.0], [86.6, 523.0], [86.7, 523.0], [86.8, 523.0], [86.9, 523.0], [87.0, 524.0], [87.1, 524.0], [87.2, 524.0], [87.3, 524.0], [87.4, 524.0], [87.5, 524.0], [87.6, 524.0], [87.7, 524.0], [87.8, 524.0], [87.9, 524.0], [88.0, 524.0], [88.1, 524.0], [88.2, 524.0], [88.3, 524.0], [88.4, 524.0], [88.5, 525.0], [88.6, 525.0], [88.7, 525.0], [88.8, 526.0], [88.9, 526.0], [89.0, 526.0], [89.1, 526.0], [89.2, 526.0], [89.3, 526.0], [89.4, 526.0], [89.5, 526.0], [89.6, 526.0], [89.7, 526.0], [89.8, 526.0], [89.9, 526.0], [90.0, 526.0], [90.1, 526.0], [90.2, 526.0], [90.3, 526.0], [90.4, 526.0], [90.5, 526.0], [90.6, 526.0], [90.7, 526.0], [90.8, 526.0], [90.9, 526.0], [91.0, 526.0], [91.1, 526.0], [91.2, 526.0], [91.3, 526.0], [91.4, 526.0], [91.5, 526.0], [91.6, 526.0], [91.7, 526.0], [91.8, 526.0], [91.9, 526.0], [92.0, 527.0], [92.1, 527.0], [92.2, 527.0], [92.3, 527.0], [92.4, 527.0], [92.5, 527.0], [92.6, 527.0], [92.7, 527.0], [92.8, 528.0], [92.9, 528.0], [93.0, 528.0], [93.1, 528.0], [93.2, 528.0], [93.3, 528.0], [93.4, 528.0], [93.5, 528.0], [93.6, 528.0], [93.7, 529.0], [93.8, 529.0], [93.9, 529.0], [94.0, 529.0], [94.1, 529.0], [94.2, 529.0], [94.3, 529.0], [94.4, 529.0], [94.5, 529.0], [94.6, 529.0], [94.7, 529.0], [94.8, 529.0], [94.9, 529.0], [95.0, 529.0], [95.1, 530.0], [95.2, 530.0], [95.3, 530.0], [95.4, 530.0], [95.5, 530.0], [95.6, 530.0], [95.7, 530.0], [95.8, 530.0], [95.9, 530.0], [96.0, 530.0], [96.1, 530.0], [96.2, 530.0], [96.3, 530.0], [96.4, 530.0], [96.5, 530.0], [96.6, 531.0], [96.7, 531.0], [96.8, 531.0], [96.9, 531.0], [97.0, 531.0], [97.1, 531.0], [97.2, 531.0], [97.3, 531.0], [97.4, 532.0], [97.5, 532.0], [97.6, 532.0], [97.7, 533.0], [97.8, 533.0], [97.9, 533.0], [98.0, 534.0], [98.1, 534.0], [98.2, 534.0], [98.3, 541.0], [98.4, 541.0], [98.5, 541.0], [98.6, 543.0], [98.7, 543.0], [98.8, 543.0], [98.9, 550.0], [99.0, 550.0], [99.1, 550.0], [99.2, 553.0], [99.3, 553.0], [99.4, 553.0], [99.5, 561.0], [99.6, 561.0], [99.7, 561.0], [99.8, 572.0], [99.9, 572.0], [100.0, 572.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 163.0, "minX": 400.0, "maxY": 183.0, "series": [{"data": [[400.0, 183.0], [500.0, 163.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 187.0, "series": [{"data": [[0.0, 187.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 158.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.620233575E12, "maxY": 21.0, "series": [{"data": [[1.620233577E12, 2.0], [1.62023362E12, 16.0], [1.620233575E12, 1.0], [1.620233618E12, 15.75], [1.620233616E12, 15.0], [1.620233614E12, 14.0], [1.620233612E12, 13.833333333333334], [1.62023361E12, 13.0], [1.620233608E12, 12.0], [1.620233606E12, 11.666666666666666], [1.620233604E12, 11.0], [1.620233602E12, 10.0], [1.620233599E12, 9.0], [1.620233597E12, 8.75], [1.620233595E12, 8.0], [1.620233593E12, 7.0], [1.620233636E12, 20.09090909090909], [1.620233591E12, 6.666666666666667], [1.620233634E12, 21.0], [1.620233589E12, 6.0], [1.620233632E12, 20.0], [1.620233587E12, 5.0], [1.62023363E12, 19.88888888888889], [1.620233585E12, 4.5], [1.620233628E12, 19.0], [1.620233583E12, 4.0], [1.620233626E12, 18.0], [1.620233581E12, 3.0], [1.620233624E12, 17.75], [1.620233579E12, 2.0], [1.620233622E12, 17.0], [1.620233621E12, 16.714285714285715], [1.620233578E12, 2.0], [1.620233619E12, 16.0], [1.620233617E12, 15.0], [1.620233615E12, 14.666666666666666], [1.620233613E12, 14.0], [1.620233611E12, 13.0], [1.620233609E12, 12.666666666666666], [1.620233607E12, 12.0], [1.620233605E12, 11.0], [1.620233603E12, 10.75], [1.620233601E12, 10.0], [1.6202336E12, 9.75], [1.620233598E12, 9.0], [1.620233596E12, 8.0], [1.620233637E12, 11.0], [1.620233594E12, 7.75], [1.620233635E12, 21.0], [1.620233592E12, 7.0], [1.620233633E12, 20.88888888888889], [1.62023359E12, 6.0], [1.620233631E12, 20.0], [1.620233588E12, 5.666666666666667], [1.620233629E12, 19.0], [1.620233586E12, 5.0], [1.620233627E12, 18.77777777777778], [1.620233584E12, 4.0], [1.620233625E12, 18.0], [1.620233582E12, 3.0], [1.620233623E12, 17.0], [1.62023358E12, 3.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.620233637E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 449.3333333333333, "minX": 1.0, "maxY": 534.4285714285714, "series": [{"data": [[2.0, 449.3333333333333], [8.0, 463.4166666666667], [9.0, 468.69230769230774], [10.0, 471.99999999999994], [11.0, 478.70588235294116], [3.0, 450.25], [12.0, 480.0], [13.0, 488.3684210526315], [14.0, 491.17391304347825], [15.0, 493.95238095238096], [1.0, 497.0], [4.0, 451.8333333333333], [16.0, 499.79166666666674], [17.0, 504.70833333333337], [18.0, 510.6538461538462], [19.0, 515.9642857142857], [5.0, 457.14285714285717], [20.0, 520.8620689655173], [21.0, 527.3333333333334], [22.0, 534.4285714285714], [6.0, 456.3333333333333], [7.0, 460.4]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[14.473988439306355, 494.8757225433527]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 22.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 155.0, "minX": 1.620233575E12, "maxY": 6347.0, "series": [{"data": [[1.620233577E12, 367.0], [1.62023362E12, 3303.0], [1.620233575E12, 367.0], [1.620233618E12, 2936.0], [1.620233616E12, 2936.0], [1.620233614E12, 2936.0], [1.620233612E12, 2202.0], [1.62023361E12, 2202.0], [1.620233608E12, 2202.0], [1.620233606E12, 2202.0], [1.620233604E12, 2202.0], [1.620233602E12, 2202.0], [1.620233599E12, 1835.0], [1.620233597E12, 1468.0], [1.620233595E12, 1101.0], [1.620233593E12, 1468.0], [1.620233636E12, 6347.0], [1.620233591E12, 1101.0], [1.620233634E12, 4037.0], [1.620233589E12, 1101.0], [1.620233632E12, 3670.0], [1.620233587E12, 734.0], [1.62023363E12, 3303.0], [1.620233585E12, 734.0], [1.620233628E12, 3303.0], [1.620233583E12, 1101.0], [1.620233626E12, 3303.0], [1.620233581E12, 734.0], [1.620233624E12, 2936.0], [1.620233579E12, 367.0], [1.620233622E12, 3303.0], [1.620233621E12, 2569.0], [1.620233578E12, 367.0], [1.620233619E12, 2569.0], [1.620233617E12, 2569.0], [1.620233615E12, 2202.0], [1.620233613E12, 2569.0], [1.620233611E12, 2569.0], [1.620233609E12, 2202.0], [1.620233607E12, 2202.0], [1.620233605E12, 1835.0], [1.620233603E12, 1468.0], [1.620233601E12, 1835.0], [1.6202336E12, 1468.0], [1.620233598E12, 1468.0], [1.620233596E12, 1835.0], [1.620233637E12, 367.0], [1.620233594E12, 1468.0], [1.620233635E12, 3670.0], [1.620233592E12, 1101.0], [1.620233633E12, 3303.0], [1.62023359E12, 1101.0], [1.620233631E12, 3670.0], [1.620233588E12, 1101.0], [1.620233629E12, 3670.0], [1.620233586E12, 1101.0], [1.620233627E12, 3303.0], [1.620233584E12, 734.0], [1.620233625E12, 3303.0], [1.620233582E12, 367.0], [1.620233623E12, 2936.0], [1.62023358E12, 367.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.620233577E12, 155.0], [1.62023362E12, 1395.0], [1.620233575E12, 155.0], [1.620233618E12, 1240.0], [1.620233616E12, 1240.0], [1.620233614E12, 1240.0], [1.620233612E12, 930.0], [1.62023361E12, 930.0], [1.620233608E12, 930.0], [1.620233606E12, 930.0], [1.620233604E12, 930.0], [1.620233602E12, 930.0], [1.620233599E12, 775.0], [1.620233597E12, 620.0], [1.620233595E12, 465.0], [1.620233593E12, 620.0], [1.620233636E12, 1550.0], [1.620233591E12, 465.0], [1.620233634E12, 1705.0], [1.620233589E12, 465.0], [1.620233632E12, 1550.0], [1.620233587E12, 310.0], [1.62023363E12, 1395.0], [1.620233585E12, 310.0], [1.620233628E12, 1395.0], [1.620233583E12, 465.0], [1.620233626E12, 1395.0], [1.620233581E12, 310.0], [1.620233624E12, 1240.0], [1.620233579E12, 155.0], [1.620233622E12, 1395.0], [1.620233621E12, 1085.0], [1.620233578E12, 155.0], [1.620233619E12, 1085.0], [1.620233617E12, 1085.0], [1.620233615E12, 930.0], [1.620233613E12, 1085.0], [1.620233611E12, 1085.0], [1.620233609E12, 930.0], [1.620233607E12, 930.0], [1.620233605E12, 775.0], [1.620233603E12, 620.0], [1.620233601E12, 775.0], [1.6202336E12, 620.0], [1.620233598E12, 620.0], [1.620233596E12, 775.0], [1.620233637E12, 155.0], [1.620233594E12, 620.0], [1.620233635E12, 1550.0], [1.620233592E12, 465.0], [1.620233633E12, 1395.0], [1.62023359E12, 465.0], [1.620233631E12, 1550.0], [1.620233588E12, 465.0], [1.620233629E12, 1550.0], [1.620233586E12, 465.0], [1.620233627E12, 1395.0], [1.620233584E12, 310.0], [1.620233625E12, 1395.0], [1.620233582E12, 155.0], [1.620233623E12, 1240.0], [1.62023358E12, 155.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.620233637E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 438.0, "minX": 1.620233575E12, "maxY": 533.0, "series": [{"data": [[1.620233577E12, 438.0], [1.62023362E12, 504.0], [1.620233575E12, 497.0], [1.620233618E12, 496.125], [1.620233616E12, 491.49999999999994], [1.620233614E12, 492.625], [1.620233612E12, 485.3333333333333], [1.62023361E12, 487.0], [1.620233608E12, 485.16666666666663], [1.620233606E12, 476.8333333333333], [1.620233604E12, 473.0], [1.620233602E12, 477.5], [1.620233599E12, 476.8], [1.620233597E12, 462.0], [1.620233595E12, 459.3333333333333], [1.620233593E12, 467.75], [1.620233636E12, 533.0], [1.620233591E12, 455.0], [1.620233634E12, 526.0909090909091], [1.620233589E12, 451.3333333333333], [1.620233632E12, 524.3], [1.620233587E12, 471.5], [1.62023363E12, 517.6666666666667], [1.620233585E12, 449.5], [1.620233628E12, 513.6666666666666], [1.620233583E12, 445.0], [1.620233626E12, 513.5555555555555], [1.620233581E12, 459.5], [1.620233624E12, 508.5], [1.620233579E12, 440.0], [1.620233622E12, 502.44444444444446], [1.620233621E12, 501.14285714285717], [1.620233578E12, 470.0], [1.620233619E12, 497.2857142857143], [1.620233617E12, 499.28571428571433], [1.620233615E12, 491.8333333333333], [1.620233613E12, 486.4285714285714], [1.620233611E12, 489.0], [1.620233609E12, 480.16666666666663], [1.620233607E12, 476.66666666666663], [1.620233605E12, 480.4], [1.620233603E12, 470.75], [1.620233601E12, 468.2], [1.6202336E12, 467.5], [1.620233598E12, 464.5], [1.620233596E12, 468.6], [1.620233637E12, 530.0], [1.620233594E12, 459.0], [1.620233635E12, 531.7], [1.620233592E12, 455.3333333333333], [1.620233633E12, 523.0], [1.62023359E12, 465.3333333333333], [1.620233631E12, 519.8], [1.620233588E12, 450.6666666666667], [1.620233629E12, 518.7], [1.620233586E12, 452.0], [1.620233627E12, 512.3333333333334], [1.620233584E12, 463.0], [1.620233625E12, 508.6666666666667], [1.620233582E12, 443.0], [1.620233623E12, 508.625], [1.62023358E12, 439.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.620233637E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 438.0, "minX": 1.620233575E12, "maxY": 531.7, "series": [{"data": [[1.620233577E12, 438.0], [1.62023362E12, 503.8888888888889], [1.620233575E12, 496.0], [1.620233618E12, 496.125], [1.620233616E12, 491.49999999999994], [1.620233614E12, 492.625], [1.620233612E12, 485.3333333333333], [1.62023361E12, 487.0], [1.620233608E12, 485.0], [1.620233606E12, 476.8333333333333], [1.620233604E12, 473.0], [1.620233602E12, 477.33333333333337], [1.620233599E12, 476.8], [1.620233597E12, 462.0], [1.620233595E12, 459.3333333333333], [1.620233593E12, 467.75], [1.620233636E12, 480.90909090909093], [1.620233591E12, 454.6666666666667], [1.620233634E12, 526.0], [1.620233589E12, 451.3333333333333], [1.620233632E12, 524.2], [1.620233587E12, 471.0], [1.62023363E12, 517.6666666666667], [1.620233585E12, 449.5], [1.620233628E12, 513.6666666666666], [1.620233583E12, 445.0], [1.620233626E12, 513.5555555555555], [1.620233581E12, 459.5], [1.620233624E12, 508.37500000000006], [1.620233579E12, 440.0], [1.620233622E12, 502.44444444444446], [1.620233621E12, 501.14285714285717], [1.620233578E12, 470.0], [1.620233619E12, 497.2857142857143], [1.620233617E12, 499.1428571428571], [1.620233615E12, 491.8333333333333], [1.620233613E12, 486.2857142857143], [1.620233611E12, 489.0], [1.620233609E12, 480.16666666666663], [1.620233607E12, 476.66666666666663], [1.620233605E12, 480.4], [1.620233603E12, 470.75], [1.620233601E12, 467.8], [1.6202336E12, 467.5], [1.620233598E12, 464.5], [1.620233596E12, 468.6], [1.620233637E12, 529.0], [1.620233594E12, 458.75], [1.620233635E12, 531.7], [1.620233592E12, 455.3333333333333], [1.620233633E12, 523.0], [1.62023359E12, 465.3333333333333], [1.620233631E12, 519.5999999999999], [1.620233588E12, 450.6666666666667], [1.620233629E12, 518.7], [1.620233586E12, 452.0], [1.620233627E12, 512.2222222222222], [1.620233584E12, 463.0], [1.620233625E12, 508.55555555555554], [1.620233582E12, 443.0], [1.620233623E12, 508.625], [1.62023358E12, 439.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.620233637E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.620233575E12, "maxY": 17.0, "series": [{"data": [[1.620233577E12, 0.0], [1.62023362E12, 0.11111111111111113], [1.620233575E12, 17.0], [1.620233618E12, 0.0], [1.620233616E12, 0.0], [1.620233614E12, 0.12500000000000003], [1.620233612E12, 0.0], [1.62023361E12, 0.0], [1.620233608E12, 0.16666666666666669], [1.620233606E12, 0.0], [1.620233604E12, 0.0], [1.620233602E12, 0.16666666666666669], [1.620233599E12, 0.0], [1.620233597E12, 0.0], [1.620233595E12, 0.0], [1.620233593E12, 0.25], [1.620233636E12, 0.0909090909090909], [1.620233591E12, 0.0], [1.620233634E12, 0.0], [1.620233589E12, 0.0], [1.620233632E12, 0.0], [1.620233587E12, 0.5], [1.62023363E12, 0.0], [1.620233585E12, 0.0], [1.620233628E12, 0.0], [1.620233583E12, 0.0], [1.620233626E12, 0.11111111111111113], [1.620233581E12, 0.5], [1.620233624E12, 0.0], [1.620233579E12, 0.0], [1.620233622E12, 0.0], [1.620233621E12, 0.0], [1.620233578E12, 1.0], [1.620233619E12, 0.0], [1.620233617E12, 0.14285714285714288], [1.620233615E12, 0.0], [1.620233613E12, 0.0], [1.620233611E12, 0.14285714285714288], [1.620233609E12, 0.0], [1.620233607E12, 0.0], [1.620233605E12, 0.2], [1.620233603E12, 0.0], [1.620233601E12, 0.0], [1.6202336E12, 0.0], [1.620233598E12, 0.0], [1.620233596E12, 0.0], [1.620233637E12, 0.0], [1.620233594E12, 0.0], [1.620233635E12, 0.0], [1.620233592E12, 0.0], [1.620233633E12, 0.0], [1.62023359E12, 0.0], [1.620233631E12, 0.0], [1.620233588E12, 0.0], [1.620233629E12, 0.0], [1.620233586E12, 0.0], [1.620233627E12, 0.0], [1.620233584E12, 0.0], [1.620233625E12, 0.0], [1.620233582E12, 0.0], [1.620233623E12, 0.12500000000000003], [1.62023358E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.620233637E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 438.0, "minX": 1.620233575E12, "maxY": 561.0, "series": [{"data": [[1.620233577E12, 438.0], [1.62023362E12, 534.0], [1.620233575E12, 497.0], [1.620233618E12, 500.0], [1.620233616E12, 494.0], [1.620233614E12, 521.0], [1.620233612E12, 486.0], [1.62023361E12, 508.0], [1.620233608E12, 512.0], [1.620233606E12, 478.0], [1.620233604E12, 476.0], [1.620233602E12, 510.0], [1.620233599E12, 515.0], [1.620233597E12, 463.0], [1.620233595E12, 460.0], [1.620233593E12, 493.0], [1.620233636E12, 532.0], [1.620233591E12, 457.0], [1.620233634E12, 529.0], [1.620233589E12, 452.0], [1.620233632E12, 553.0], [1.620233587E12, 490.0], [1.62023363E12, 526.0], [1.620233585E12, 450.0], [1.620233628E12, 516.0], [1.620233583E12, 447.0], [1.620233626E12, 543.0], [1.620233581E12, 476.0], [1.620233624E12, 527.0], [1.620233579E12, 440.0], [1.620233622E12, 504.0], [1.620233621E12, 504.0], [1.620233578E12, 470.0], [1.620233619E12, 500.0], [1.620233617E12, 529.0], [1.620233615E12, 503.0], [1.620233613E12, 487.0], [1.620233611E12, 516.0], [1.620233609E12, 483.0], [1.620233607E12, 479.0], [1.620233605E12, 507.0], [1.620233603E12, 471.0], [1.620233601E12, 470.0], [1.6202336E12, 470.0], [1.620233598E12, 465.0], [1.620233596E12, 497.0], [1.620233637E12, 530.0], [1.620233594E12, 459.0], [1.620233635E12, 561.0], [1.620233592E12, 457.0], [1.620233633E12, 525.0], [1.62023359E12, 486.0], [1.620233631E12, 529.0], [1.620233588E12, 452.0], [1.620233629E12, 550.0], [1.620233586E12, 461.0], [1.620233627E12, 522.0], [1.620233584E12, 477.0], [1.620233625E12, 510.0], [1.620233582E12, 443.0], [1.620233623E12, 541.0], [1.62023358E12, 439.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.620233577E12, 438.0], [1.62023362E12, 534.0], [1.620233575E12, 497.0], [1.620233618E12, 500.0], [1.620233616E12, 494.0], [1.620233614E12, 521.0], [1.620233612E12, 486.0], [1.62023361E12, 508.0], [1.620233608E12, 512.0], [1.620233606E12, 478.0], [1.620233604E12, 476.0], [1.620233602E12, 510.0], [1.620233599E12, 515.0], [1.620233597E12, 463.0], [1.620233595E12, 460.0], [1.620233593E12, 493.0], [1.620233636E12, 531.9], [1.620233591E12, 457.0], [1.620233634E12, 528.8], [1.620233589E12, 452.0], [1.620233632E12, 550.0], [1.620233587E12, 490.0], [1.62023363E12, 526.0], [1.620233585E12, 450.0], [1.620233628E12, 516.0], [1.620233583E12, 447.0], [1.620233626E12, 543.0], [1.620233581E12, 476.0], [1.620233624E12, 527.0], [1.620233579E12, 440.0], [1.620233622E12, 504.0], [1.620233621E12, 504.0], [1.620233578E12, 470.0], [1.620233619E12, 500.0], [1.620233617E12, 529.0], [1.620233615E12, 503.0], [1.620233613E12, 487.0], [1.620233611E12, 516.0], [1.620233609E12, 483.0], [1.620233607E12, 479.0], [1.620233605E12, 507.0], [1.620233603E12, 471.0], [1.620233601E12, 470.0], [1.6202336E12, 470.0], [1.620233598E12, 465.0], [1.620233596E12, 497.0], [1.620233637E12, 530.0], [1.620233594E12, 459.0], [1.620233635E12, 558.2], [1.620233592E12, 457.0], [1.620233633E12, 525.0], [1.62023359E12, 486.0], [1.620233631E12, 528.3], [1.620233588E12, 452.0], [1.620233629E12, 546.9], [1.620233586E12, 461.0], [1.620233627E12, 522.0], [1.620233584E12, 477.0], [1.620233625E12, 510.0], [1.620233582E12, 443.0], [1.620233623E12, 541.0], [1.62023358E12, 439.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.620233577E12, 438.0], [1.62023362E12, 534.0], [1.620233575E12, 497.0], [1.620233618E12, 500.0], [1.620233616E12, 494.0], [1.620233614E12, 521.0], [1.620233612E12, 486.0], [1.62023361E12, 508.0], [1.620233608E12, 512.0], [1.620233606E12, 478.0], [1.620233604E12, 476.0], [1.620233602E12, 510.0], [1.620233599E12, 515.0], [1.620233597E12, 463.0], [1.620233595E12, 460.0], [1.620233593E12, 493.0], [1.620233636E12, 532.0], [1.620233591E12, 457.0], [1.620233634E12, 529.0], [1.620233589E12, 452.0], [1.620233632E12, 553.0], [1.620233587E12, 490.0], [1.62023363E12, 526.0], [1.620233585E12, 450.0], [1.620233628E12, 516.0], [1.620233583E12, 447.0], [1.620233626E12, 543.0], [1.620233581E12, 476.0], [1.620233624E12, 527.0], [1.620233579E12, 440.0], [1.620233622E12, 504.0], [1.620233621E12, 504.0], [1.620233578E12, 470.0], [1.620233619E12, 500.0], [1.620233617E12, 529.0], [1.620233615E12, 503.0], [1.620233613E12, 487.0], [1.620233611E12, 516.0], [1.620233609E12, 483.0], [1.620233607E12, 479.0], [1.620233605E12, 507.0], [1.620233603E12, 471.0], [1.620233601E12, 470.0], [1.6202336E12, 470.0], [1.620233598E12, 465.0], [1.620233596E12, 497.0], [1.620233637E12, 530.0], [1.620233594E12, 459.0], [1.620233635E12, 561.0], [1.620233592E12, 457.0], [1.620233633E12, 525.0], [1.62023359E12, 486.0], [1.620233631E12, 529.0], [1.620233588E12, 452.0], [1.620233629E12, 550.0], [1.620233586E12, 461.0], [1.620233627E12, 522.0], [1.620233584E12, 477.0], [1.620233625E12, 510.0], [1.620233582E12, 443.0], [1.620233623E12, 541.0], [1.62023358E12, 439.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.620233577E12, 438.0], [1.62023362E12, 534.0], [1.620233575E12, 497.0], [1.620233618E12, 500.0], [1.620233616E12, 494.0], [1.620233614E12, 521.0], [1.620233612E12, 486.0], [1.62023361E12, 508.0], [1.620233608E12, 512.0], [1.620233606E12, 478.0], [1.620233604E12, 476.0], [1.620233602E12, 510.0], [1.620233599E12, 515.0], [1.620233597E12, 463.0], [1.620233595E12, 460.0], [1.620233593E12, 493.0], [1.620233636E12, 532.0], [1.620233591E12, 457.0], [1.620233634E12, 529.0], [1.620233589E12, 452.0], [1.620233632E12, 553.0], [1.620233587E12, 490.0], [1.62023363E12, 526.0], [1.620233585E12, 450.0], [1.620233628E12, 516.0], [1.620233583E12, 447.0], [1.620233626E12, 543.0], [1.620233581E12, 476.0], [1.620233624E12, 527.0], [1.620233579E12, 440.0], [1.620233622E12, 504.0], [1.620233621E12, 504.0], [1.620233578E12, 470.0], [1.620233619E12, 500.0], [1.620233617E12, 529.0], [1.620233615E12, 503.0], [1.620233613E12, 487.0], [1.620233611E12, 516.0], [1.620233609E12, 483.0], [1.620233607E12, 479.0], [1.620233605E12, 507.0], [1.620233603E12, 471.0], [1.620233601E12, 470.0], [1.6202336E12, 470.0], [1.620233598E12, 465.0], [1.620233596E12, 497.0], [1.620233637E12, 530.0], [1.620233594E12, 459.0], [1.620233635E12, 561.0], [1.620233592E12, 457.0], [1.620233633E12, 525.0], [1.62023359E12, 486.0], [1.620233631E12, 529.0], [1.620233588E12, 452.0], [1.620233629E12, 550.0], [1.620233586E12, 461.0], [1.620233627E12, 522.0], [1.620233584E12, 477.0], [1.620233625E12, 510.0], [1.620233582E12, 443.0], [1.620233623E12, 541.0], [1.62023358E12, 439.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.620233577E12, 438.0], [1.62023362E12, 498.0], [1.620233575E12, 497.0], [1.620233618E12, 494.0], [1.620233616E12, 490.0], [1.620233614E12, 487.0], [1.620233612E12, 485.0], [1.62023361E12, 481.0], [1.620233608E12, 479.0], [1.620233606E12, 476.0], [1.620233604E12, 471.0], [1.620233602E12, 469.0], [1.620233599E12, 465.0], [1.620233597E12, 461.0], [1.620233595E12, 459.0], [1.620233593E12, 458.0], [1.620233636E12, 524.0], [1.620233591E12, 454.0], [1.620233634E12, 523.0], [1.620233589E12, 451.0], [1.620233632E12, 519.0], [1.620233587E12, 453.0], [1.62023363E12, 515.0], [1.620233585E12, 449.0], [1.620233628E12, 511.0], [1.620233583E12, 444.0], [1.620233626E12, 508.0], [1.620233581E12, 443.0], [1.620233624E12, 503.0], [1.620233579E12, 440.0], [1.620233622E12, 501.0], [1.620233621E12, 499.0], [1.620233578E12, 470.0], [1.620233619E12, 495.0], [1.620233617E12, 492.0], [1.620233615E12, 489.0], [1.620233613E12, 485.0], [1.620233611E12, 482.0], [1.620233609E12, 479.0], [1.620233607E12, 475.0], [1.620233605E12, 473.0], [1.620233603E12, 470.0], [1.620233601E12, 467.0], [1.6202336E12, 466.0], [1.620233598E12, 464.0], [1.620233596E12, 460.0], [1.620233637E12, 530.0], [1.620233594E12, 459.0], [1.620233635E12, 526.0], [1.620233592E12, 454.0], [1.620233633E12, 521.0], [1.62023359E12, 455.0], [1.620233631E12, 516.0], [1.620233588E12, 449.0], [1.620233629E12, 512.0], [1.620233586E12, 447.0], [1.620233627E12, 510.0], [1.620233584E12, 449.0], [1.620233625E12, 507.0], [1.620233582E12, 443.0], [1.620233623E12, 501.0], [1.62023358E12, 439.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.620233577E12, 438.0], [1.62023362E12, 500.0], [1.620233575E12, 497.0], [1.620233618E12, 495.5], [1.620233616E12, 491.5], [1.620233614E12, 488.5], [1.620233612E12, 485.0], [1.62023361E12, 483.0], [1.620233608E12, 480.0], [1.620233606E12, 477.0], [1.620233604E12, 472.5], [1.620233602E12, 471.0], [1.620233599E12, 468.0], [1.620233597E12, 462.0], [1.620233595E12, 459.0], [1.620233593E12, 460.0], [1.620233636E12, 530.0], [1.620233591E12, 454.0], [1.620233634E12, 526.0], [1.620233589E12, 451.0], [1.620233632E12, 522.0], [1.620233587E12, 471.5], [1.62023363E12, 517.0], [1.620233585E12, 449.5], [1.620233628E12, 514.0], [1.620233583E12, 444.0], [1.620233626E12, 510.0], [1.620233581E12, 459.5], [1.620233624E12, 507.0], [1.620233579E12, 440.0], [1.620233622E12, 502.0], [1.620233621E12, 502.0], [1.620233578E12, 470.0], [1.620233619E12, 497.0], [1.620233617E12, 495.0], [1.620233615E12, 489.5], [1.620233613E12, 487.0], [1.620233611E12, 485.0], [1.620233609E12, 480.0], [1.620233607E12, 476.5], [1.620233605E12, 474.0], [1.620233603E12, 471.0], [1.620233601E12, 468.0], [1.6202336E12, 467.0], [1.620233598E12, 464.5], [1.620233596E12, 462.0], [1.620233637E12, 530.0], [1.620233594E12, 459.0], [1.620233635E12, 529.0], [1.620233592E12, 455.0], [1.620233633E12, 523.0], [1.62023359E12, 455.0], [1.620233631E12, 519.0], [1.620233588E12, 451.0], [1.620233629E12, 515.0], [1.620233586E12, 448.0], [1.620233627E12, 511.0], [1.620233584E12, 463.0], [1.620233625E12, 509.0], [1.620233582E12, 443.0], [1.620233623E12, 503.5], [1.62023358E12, 439.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.620233637E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 443.0, "minX": 1.0, "maxY": 572.0, "series": [{"data": [[1.0, 443.0], [2.0, 451.5], [4.0, 464.0], [8.0, 496.5], [9.0, 510.5], [5.0, 468.5], [10.0, 521.0], [11.0, 527.0], [3.0, 454.0], [6.0, 479.5], [7.0, 495.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 572.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 527.0, "series": [{"data": [[1.0, 443.0], [2.0, 451.5], [4.0, 464.0], [8.0, 496.5], [9.0, 510.5], [5.0, 468.5], [10.0, 521.0], [11.0, 527.0], [3.0, 454.0], [6.0, 479.5], [7.0, 495.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.620233574E12, "maxY": 11.0, "series": [{"data": [[1.620233577E12, 1.0], [1.62023362E12, 8.0], [1.620233618E12, 8.0], [1.620233616E12, 8.0], [1.620233614E12, 7.0], [1.620233612E12, 8.0], [1.62023361E12, 8.0], [1.620233608E12, 6.0], [1.620233606E12, 6.0], [1.620233604E12, 6.0], [1.620233602E12, 5.0], [1.620233599E12, 4.0], [1.620233597E12, 4.0], [1.620233595E12, 4.0], [1.620233593E12, 3.0], [1.620233636E12, 5.0], [1.620233591E12, 3.0], [1.620233634E12, 11.0], [1.620233589E12, 3.0], [1.620233632E12, 10.0], [1.620233587E12, 2.0], [1.62023363E12, 10.0], [1.620233585E12, 2.0], [1.620233628E12, 11.0], [1.620233583E12, 2.0], [1.620233626E12, 9.0], [1.620233581E12, 1.0], [1.620233624E12, 9.0], [1.620233579E12, 1.0], [1.620233622E12, 9.0], [1.620233621E12, 8.0], [1.620233578E12, 1.0], [1.620233619E12, 8.0], [1.620233576E12, 1.0], [1.620233617E12, 7.0], [1.620233574E12, 1.0], [1.620233615E12, 7.0], [1.620233613E12, 7.0], [1.620233611E12, 5.0], [1.620233609E12, 6.0], [1.620233607E12, 6.0], [1.620233605E12, 5.0], [1.620233603E12, 5.0], [1.620233601E12, 5.0], [1.6202336E12, 5.0], [1.620233598E12, 5.0], [1.620233596E12, 4.0], [1.620233594E12, 4.0], [1.620233635E12, 10.0], [1.620233592E12, 4.0], [1.620233633E12, 10.0], [1.62023359E12, 3.0], [1.620233631E12, 10.0], [1.620233588E12, 3.0], [1.620233629E12, 8.0], [1.620233586E12, 3.0], [1.620233627E12, 8.0], [1.620233584E12, 2.0], [1.620233625E12, 9.0], [1.620233582E12, 2.0], [1.620233623E12, 8.0], [1.62023358E12, 2.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.620233636E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.620233575E12, "maxY": 11.0, "series": [{"data": [[1.620233577E12, 1.0], [1.62023362E12, 9.0], [1.620233575E12, 1.0], [1.620233618E12, 8.0], [1.620233616E12, 8.0], [1.620233614E12, 8.0], [1.620233612E12, 6.0], [1.62023361E12, 6.0], [1.620233608E12, 6.0], [1.620233606E12, 6.0], [1.620233604E12, 6.0], [1.620233602E12, 6.0], [1.620233599E12, 5.0], [1.620233597E12, 4.0], [1.620233595E12, 3.0], [1.620233593E12, 4.0], [1.620233636E12, 10.0], [1.620233591E12, 3.0], [1.620233634E12, 11.0], [1.620233589E12, 3.0], [1.620233632E12, 10.0], [1.620233587E12, 2.0], [1.62023363E12, 9.0], [1.620233585E12, 2.0], [1.620233628E12, 9.0], [1.620233583E12, 3.0], [1.620233626E12, 9.0], [1.620233581E12, 2.0], [1.620233624E12, 8.0], [1.620233579E12, 1.0], [1.620233622E12, 9.0], [1.620233621E12, 7.0], [1.620233578E12, 1.0], [1.620233619E12, 7.0], [1.620233617E12, 7.0], [1.620233615E12, 6.0], [1.620233613E12, 7.0], [1.620233611E12, 7.0], [1.620233609E12, 6.0], [1.620233607E12, 6.0], [1.620233605E12, 5.0], [1.620233603E12, 4.0], [1.620233601E12, 5.0], [1.6202336E12, 4.0], [1.620233598E12, 4.0], [1.620233596E12, 5.0], [1.620233637E12, 1.0], [1.620233594E12, 4.0], [1.620233635E12, 10.0], [1.620233592E12, 3.0], [1.620233633E12, 9.0], [1.62023359E12, 3.0], [1.620233631E12, 10.0], [1.620233588E12, 3.0], [1.620233629E12, 10.0], [1.620233586E12, 3.0], [1.620233627E12, 9.0], [1.620233584E12, 2.0], [1.620233625E12, 9.0], [1.620233582E12, 1.0], [1.620233623E12, 8.0], [1.62023358E12, 1.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.620233636E12, 1.0]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.620233637E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.620233575E12, "maxY": 11.0, "series": [{"data": [[1.620233577E12, 1.0], [1.62023362E12, 9.0], [1.620233575E12, 1.0], [1.620233618E12, 8.0], [1.620233616E12, 8.0], [1.620233614E12, 8.0], [1.620233612E12, 6.0], [1.62023361E12, 6.0], [1.620233608E12, 6.0], [1.620233606E12, 6.0], [1.620233604E12, 6.0], [1.620233602E12, 6.0], [1.620233599E12, 5.0], [1.620233597E12, 4.0], [1.620233595E12, 3.0], [1.620233593E12, 4.0], [1.620233636E12, 10.0], [1.620233591E12, 3.0], [1.620233634E12, 11.0], [1.620233589E12, 3.0], [1.620233632E12, 10.0], [1.620233587E12, 2.0], [1.62023363E12, 9.0], [1.620233585E12, 2.0], [1.620233628E12, 9.0], [1.620233583E12, 3.0], [1.620233626E12, 9.0], [1.620233581E12, 2.0], [1.620233624E12, 8.0], [1.620233579E12, 1.0], [1.620233622E12, 9.0], [1.620233621E12, 7.0], [1.620233578E12, 1.0], [1.620233619E12, 7.0], [1.620233617E12, 7.0], [1.620233615E12, 6.0], [1.620233613E12, 7.0], [1.620233611E12, 7.0], [1.620233609E12, 6.0], [1.620233607E12, 6.0], [1.620233605E12, 5.0], [1.620233603E12, 4.0], [1.620233601E12, 5.0], [1.6202336E12, 4.0], [1.620233598E12, 4.0], [1.620233596E12, 5.0], [1.620233637E12, 1.0], [1.620233594E12, 4.0], [1.620233635E12, 10.0], [1.620233592E12, 3.0], [1.620233633E12, 9.0], [1.62023359E12, 3.0], [1.620233631E12, 10.0], [1.620233588E12, 3.0], [1.620233629E12, 10.0], [1.620233586E12, 3.0], [1.620233627E12, 9.0], [1.620233584E12, 2.0], [1.620233625E12, 9.0], [1.620233582E12, 1.0], [1.620233623E12, 8.0], [1.62023358E12, 1.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.620233636E12, 1.0]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.620233637E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.620233575E12, "maxY": 11.0, "series": [{"data": [[1.620233577E12, 1.0], [1.62023362E12, 9.0], [1.620233575E12, 1.0], [1.620233618E12, 8.0], [1.620233616E12, 8.0], [1.620233614E12, 8.0], [1.620233612E12, 6.0], [1.62023361E12, 6.0], [1.620233608E12, 6.0], [1.620233606E12, 6.0], [1.620233604E12, 6.0], [1.620233602E12, 6.0], [1.620233599E12, 5.0], [1.620233597E12, 4.0], [1.620233595E12, 3.0], [1.620233593E12, 4.0], [1.620233636E12, 10.0], [1.620233591E12, 3.0], [1.620233634E12, 11.0], [1.620233589E12, 3.0], [1.620233632E12, 10.0], [1.620233587E12, 2.0], [1.62023363E12, 9.0], [1.620233585E12, 2.0], [1.620233628E12, 9.0], [1.620233583E12, 3.0], [1.620233626E12, 9.0], [1.620233581E12, 2.0], [1.620233624E12, 8.0], [1.620233579E12, 1.0], [1.620233622E12, 9.0], [1.620233621E12, 7.0], [1.620233578E12, 1.0], [1.620233619E12, 7.0], [1.620233617E12, 7.0], [1.620233615E12, 6.0], [1.620233613E12, 7.0], [1.620233611E12, 7.0], [1.620233609E12, 6.0], [1.620233607E12, 6.0], [1.620233605E12, 5.0], [1.620233603E12, 4.0], [1.620233601E12, 5.0], [1.6202336E12, 4.0], [1.620233598E12, 4.0], [1.620233596E12, 5.0], [1.620233637E12, 1.0], [1.620233594E12, 4.0], [1.620233635E12, 10.0], [1.620233592E12, 3.0], [1.620233633E12, 9.0], [1.62023359E12, 3.0], [1.620233631E12, 10.0], [1.620233588E12, 3.0], [1.620233629E12, 10.0], [1.620233586E12, 3.0], [1.620233627E12, 9.0], [1.620233584E12, 2.0], [1.620233625E12, 9.0], [1.620233582E12, 1.0], [1.620233623E12, 8.0], [1.62023358E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.620233636E12, 1.0]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.620233637E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

