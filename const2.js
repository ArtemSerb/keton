function prim2(){
    lock = document.getElementById('n1').value;
    lock = parseInt(lock);
    res1 = lock*0.5
    res1 = Math.round(res1*10)/10
    jet1 = lock*55
    jet2 = res1*120
    res2 = lock*20
    res2 = Math.round(res2*10)/10
    document.getElementById('b1').innerHTML = res2;
    document.getElementById('a1').innerHTML = res1;
    document.getElementById('e1').innerHTML = res1;
    document.getElementById('j1').innerHTML = res1;
    res3 = lock*5
    res3 = Math.round(res3*10)/10
    document.getElementById('d1').innerHTML = res3;
    document.getElementById('x1').innerHTML = res3;
    sum1 = jet1 + jet2 + res1 + res1 + res3 + res3 + res2
    sum1 = Math.round(sum1*10)/10
    document.getElementById('l1').innerHTML = sum1;
    bel1 = jet1*0.15
    bel1 = Math.round(bel1*10)/10
    jir1 = jet1*0.13
    jir1 = Math.round(jir1*10)/10
    ugl1 = jet1*0.01
    ugl1 = Math.round(ugl1*10)/10
    kal1 = jet1*1.62
    kal1 = Math.round(kal1*10)/10
    document.getElementById('n2').innerHTML = bel1;
    document.getElementById('n3').innerHTML = jir1;
    document.getElementById('n4').innerHTML = ugl1;
    document.getElementById('n5').innerHTML = kal1;
    bel2 = jet2*0.04
    bel2 = Math.round(bel2*10)/10
    jir2 = jet2*0.01
    jir2 = Math.round(jir2*10)/10
    ugl2 = jet2*0.03
    ugl2 = Math.round(ugl2*10)/10
    kal2 = jet2*0.33
    kal2 = Math.round(kal2*10)/10
    document.getElementById('a2').innerHTML = bel2;
    document.getElementById('a3').innerHTML = jir2;
    document.getElementById('a4').innerHTML = ugl2;
    document.getElementById('a5').innerHTML = kal2;
    bel3 = res2*0.24
    bel3 = Math.round(bel3*10)/10
    jir3 = res2*0.23
    jir3 = Math.round(jir3*10)/10
    ugl3 = res2*0
    ugl3 = Math.round(ugl3*10)/10
    kal3 = res2*2.96
    kal3 = Math.round(kal3*10)/10
    document.getElementById('b2').innerHTML = bel3;
    document.getElementById('b3').innerHTML = jir3;
    document.getElementById('b4').innerHTML = ugl3;
    document.getElementById('b5').innerHTML = kal3;
    bel4 = res3*0.33
    bel4 = Math.round(bel4*10)/10
    jir4 = res3*0.26
    jir4 = Math.round(jir4*10)/10
    ugl4 = res3*0.03
    ugl4 = Math.round(ugl4*10)/10
    kal4 = res3*3.62
    kal4 = Math.round(kal4*10)/10
    document.getElementById('c2').innerHTML = bel4;
    document.getElementById('c3').innerHTML = jir4;
    document.getElementById('c4').innerHTML = ugl4;
    document.getElementById('c5').innerHTML = kal4;
    bel5 = res3*0
    bel5 = Math.round(bel5*10)/10
    jir5 = res3*0.86
    jir5 = Math.round(jir5*10)/10
    ugl5 = res3*0
    ugl5 = Math.round(ugl5*10)/10
    kal5 = res3*8.9
    kal5 = Math.round(kal5*10)/10
    document.getElementById('d2').innerHTML = bel5;
    document.getElementById('d3').innerHTML = jir5;
    document.getElementById('d4').innerHTML = ugl5;
    document.getElementById('d5').innerHTML = kal5;
    bel6 = res3*0
    bel6 = Math.round(bel6*10)/10
    jir6 = res3*0
    jir6 = Math.round(jir6*10)/10
    ugl6 = res3*0
    ugl6 = Math.round(ugl6*10)/10
    kal6 = res3*0
    kal6 = Math.round(kal6*10)/10
    document.getElementById('e2').innerHTML = bel6;
    document.getElementById('e3').innerHTML = jir6;
    document.getElementById('e4').innerHTML = ugl6;
    document.getElementById('e5').innerHTML = kal6;
    bel7 = res3*0.04
    bel7 = Math.round(bel7*10)/10
    jir7 = res3*0.03
    jir7 = Math.round(jir7*10)/10
    ugl7 = res3*0.07
    ugl7 = Math.round(ugl7*10)/10
    kal7 = res3*0.77
    kal7 = Math.round(kal7*10)/10
    document.getElementById('j2').innerHTML = bel7;
    document.getElementById('j3').innerHTML = jir7;
    document.getElementById('j4').innerHTML = ugl7;
    document.getElementById('j5').innerHTML = kal7;
    sum2 = bel1 + bel2 + bel3 + bel4 + bel5 + bel7
    sum2 = Math.round(sum2*10)/10
    sum3 = jir1 + jir2 + jir3 + jir4 + jir5 + jir7 
    sum3 = Math.round(sum3*10)/10
    sum4 = ugl1 + ugl2 + ugl3 + ugl4 + ugl5 + ugl7
    sum4 = Math.round(sum4*10)/10
    sum5 = kal1 + kal2 + kal3 + kal4 + kal5 + kal7
    sum5 = Math.round(sum5*10)/10
    document.getElementById('l2').innerHTML = sum2;
    document.getElementById('l3').innerHTML = sum3;
    document.getElementById('l4').innerHTML = sum4;
    document.getElementById('l5').innerHTML = sum5;
}