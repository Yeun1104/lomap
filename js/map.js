window.onload=function(){
//cityhall에 네이버 지도의 위/경도 좌표 값 생성자로 부름
var cityhall = new naver.maps.LatLng(37.5609892,126.9861868);
var map = new naver.maps.Map('map', {
        //0-북 90-동 180-남 270-서, 좌표에서 구하려는 좌표까지의 거리(미터)
        center: cityhall.destinationPoint(298,475),
        zoom: 17,
        minZoom: 6, //최소 줌 레벨
        zoomControl: true, //줌 컨트롤의 표시 여부
        zoomControlOptions: {
            style: naver.maps.ZoomControlStyle.SMALL,
            position: naver.maps.Position.TOP_RIGHT
        }
    }),
    marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(37.562042, 126.984991)
    });
    marker1 = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5645616,126.981416),
        map: map
    });
    marker2 = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5632159,126.9816865),
        map: map
    });
    marker3 = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.563348,126.9815601),
        map: map
    });
    marker4 = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5548695,126.9703638),
        map: map
    });
    

//설명 창의 설명
var contentString1 = [
        '<div class="iw_inner">',
        '   <h3>뉴발란스 명동점</h3>',
        '   <p>서울특별시 중구 명동 명동3길 6 뉴발란스 개양빌딩 1층<br/>02-318-1906<br>수량 : 2',
        '   </p>',
        '</div>'
    ].join(' '), //하나의 문자열로 이아즘
    contentString2 = [
        '<div class="iw_inner">',
        '   <h3>뉴발란스 슈즈 롯데백화점본점</h3>',
        '   <p>서울특별시 중구 남대문로 81<br/>02-772-3248<br>수량 : 1',
        '   </p>',
        '</div>'
    ].join(' '),
    contentString3 = [
        '<div class="iw_inner">',
        '   <h3>뉴발란스 신세계본점신관점</h3>',
        '   <p>서울특별시 중구 충무로1가 52-20<br/>02-310-5263<br>수량 : 0',
        '   </p>',
        '</div>'
    ].join(' '),
    contentString4 = [
        '<div class="iw_inner">',
        '   <h3>뉴발란스 롯데영플라자</h3>',
        '   <p>서울특별시 중구 남대문로 67<br/>02-773-0065<br>수량 : 0',
        '   </p>',
        '</div>'
    ].join(' ');


//설명 창을 띄움
var infowindow1 = new naver.maps.InfoWindow({
    content: contentString1
}),
    infowindow2 = new naver.maps.InfoWindow({
    content: contentString2
}),
    infowindow3 = new naver.maps.InfoWindow({
    content: contentString3
}),
    infowindow4 = new naver.maps.InfoWindow({
    content: contentString4
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow1.getMap()) {
        infowindow1.close();
    } else {
        infowindow1.open(map, marker);
    }
});
naver.maps.Event.addListener(marker1, "click", function(e) {
    if (infowindow2.getMap()) {
        infowindow2.close();
    } else {
        infowindow2.open(map, marker1);
    }
});
naver.maps.Event.addListener(marker2, "click", function(e) {
    if (infowindow3.getMap()) {
        infowindow3.close();
    } else {
        infowindow3.open(map, marker2);
    }
});
naver.maps.Event.addListener(marker3, "click", function(e) {
    if (infowindow4.getMap()) {
        infowindow4.close();
    } else {
        infowindow4.open(map, marker3);
    }
}); //마크 눌렀을때 창 뿅뿅 하는 활동띠

const li = document.querySelectorAll('.item_list li');

li.forEach((v)=>{
  v.addEventListener('click',(e)=>{
    infowindow1.open(map, marker);
  })
});



}
