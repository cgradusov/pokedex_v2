/* eslint-disable no-restricted-globals */
const cacheName = 'poke-cache';
const filesList = [
  '/pokedex_v2/favicon.ico',
  '/pokedex_v2/index.html',
  '/pokedex_v2/loading.css',
  '/pokedex_v2/logo192.png',
  '/pokedex_v2/logo512.png',
  '/pokedex_v2/assets/001.png',
  '/pokedex_v2/assets/002.png',
  '/pokedex_v2/assets/003.png',
  '/pokedex_v2/assets/004.png',
  '/pokedex_v2/assets/005.png',
  '/pokedex_v2/assets/006.png',
  '/pokedex_v2/assets/007.png',
  '/pokedex_v2/assets/008.png',
  '/pokedex_v2/assets/009.png',
  '/pokedex_v2/assets/010.png',
  '/pokedex_v2/assets/011.png',
  '/pokedex_v2/assets/012.png',
  '/pokedex_v2/assets/013.png',
  '/pokedex_v2/assets/014.png',
  '/pokedex_v2/assets/015.png',
  '/pokedex_v2/assets/016.png',
  '/pokedex_v2/assets/017.png',
  '/pokedex_v2/assets/018.png',
  '/pokedex_v2/assets/019.png',
  '/pokedex_v2/assets/020.png',
  '/pokedex_v2/assets/021.png',
  '/pokedex_v2/assets/022.png',
  '/pokedex_v2/assets/023.png',
  '/pokedex_v2/assets/024.png',
  '/pokedex_v2/assets/025.png',
  '/pokedex_v2/assets/026.png',
  '/pokedex_v2/assets/027.png',
  '/pokedex_v2/assets/028.png',
  '/pokedex_v2/assets/029.png',
  '/pokedex_v2/assets/030.png',
  '/pokedex_v2/assets/031.png',
  '/pokedex_v2/assets/032.png',
  '/pokedex_v2/assets/033.png',
  '/pokedex_v2/assets/034.png',
  '/pokedex_v2/assets/035.png',
  '/pokedex_v2/assets/036.png',
  '/pokedex_v2/assets/037.png',
  '/pokedex_v2/assets/038.png',
  '/pokedex_v2/assets/039.png',
  '/pokedex_v2/assets/040.png',
  '/pokedex_v2/assets/041.png',
  '/pokedex_v2/assets/042.png',
  '/pokedex_v2/assets/043.png',
  '/pokedex_v2/assets/044.png',
  '/pokedex_v2/assets/045.png',
  '/pokedex_v2/assets/046.png',
  '/pokedex_v2/assets/047.png',
  '/pokedex_v2/assets/048.png',
  '/pokedex_v2/assets/049.png',
  '/pokedex_v2/assets/050.png',
  '/pokedex_v2/assets/051.png',
  '/pokedex_v2/assets/052.png',
  '/pokedex_v2/assets/053.png',
  '/pokedex_v2/assets/054.png',
  '/pokedex_v2/assets/055.png',
  '/pokedex_v2/assets/056.png',
  '/pokedex_v2/assets/057.png',
  '/pokedex_v2/assets/058.png',
  '/pokedex_v2/assets/059.png',
  '/pokedex_v2/assets/060.png',
  '/pokedex_v2/assets/061.png',
  '/pokedex_v2/assets/062.png',
  '/pokedex_v2/assets/063.png',
  '/pokedex_v2/assets/064.png',
  '/pokedex_v2/assets/065.png',
  '/pokedex_v2/assets/066.png',
  '/pokedex_v2/assets/067.png',
  '/pokedex_v2/assets/068.png',
  '/pokedex_v2/assets/069.png',
  '/pokedex_v2/assets/070.png',
  '/pokedex_v2/assets/071.png',
  '/pokedex_v2/assets/072.png',
  '/pokedex_v2/assets/073.png',
  '/pokedex_v2/assets/074.png',
  '/pokedex_v2/assets/075.png',
  '/pokedex_v2/assets/076.png',
  '/pokedex_v2/assets/077.png',
  '/pokedex_v2/assets/078.png',
  '/pokedex_v2/assets/079.png',
  '/pokedex_v2/assets/080.png',
  '/pokedex_v2/assets/081.png',
  '/pokedex_v2/assets/082.png',
  '/pokedex_v2/assets/083.png',
  '/pokedex_v2/assets/084.png',
  '/pokedex_v2/assets/085.png',
  '/pokedex_v2/assets/086.png',
  '/pokedex_v2/assets/087.png',
  '/pokedex_v2/assets/088.png',
  '/pokedex_v2/assets/089.png',
  '/pokedex_v2/assets/090.png',
  '/pokedex_v2/assets/091.png',
  '/pokedex_v2/assets/092.png',
  '/pokedex_v2/assets/093.png',
  '/pokedex_v2/assets/094.png',
  '/pokedex_v2/assets/095.png',
  '/pokedex_v2/assets/096.png',
  '/pokedex_v2/assets/097.png',
  '/pokedex_v2/assets/098.png',
  '/pokedex_v2/assets/099.png',
  '/pokedex_v2/assets/100.png',
  '/pokedex_v2/assets/101.png',
  '/pokedex_v2/assets/102.png',
  '/pokedex_v2/assets/103.png',
  '/pokedex_v2/assets/104.png',
  '/pokedex_v2/assets/105.png',
  '/pokedex_v2/assets/106.png',
  '/pokedex_v2/assets/107.png',
  '/pokedex_v2/assets/108.png',
  '/pokedex_v2/assets/109.png',
  '/pokedex_v2/assets/110.png',
  '/pokedex_v2/assets/111.png',
  '/pokedex_v2/assets/112.png',
  '/pokedex_v2/assets/113.png',
  '/pokedex_v2/assets/114.png',
  '/pokedex_v2/assets/115.png',
  '/pokedex_v2/assets/116.png',
  '/pokedex_v2/assets/117.png',
  '/pokedex_v2/assets/118.png',
  '/pokedex_v2/assets/119.png',
  '/pokedex_v2/assets/120.png',
  '/pokedex_v2/assets/121.png',
  '/pokedex_v2/assets/122.png',
  '/pokedex_v2/assets/123.png',
  '/pokedex_v2/assets/124.png',
  '/pokedex_v2/assets/125.png',
  '/pokedex_v2/assets/126.png',
  '/pokedex_v2/assets/127.png',
  '/pokedex_v2/assets/128.png',
  '/pokedex_v2/assets/129.png',
  '/pokedex_v2/assets/130.png',
  '/pokedex_v2/assets/131.png',
  '/pokedex_v2/assets/132.png',
  '/pokedex_v2/assets/133.png',
  '/pokedex_v2/assets/134.png',
  '/pokedex_v2/assets/135.png',
  '/pokedex_v2/assets/136.png',
  '/pokedex_v2/assets/137.png',
  '/pokedex_v2/assets/138.png',
  '/pokedex_v2/assets/139.png',
  '/pokedex_v2/assets/140.png',
  '/pokedex_v2/assets/141.png',
  '/pokedex_v2/assets/142.png',
  '/pokedex_v2/assets/143.png',
  '/pokedex_v2/assets/144.png',
  '/pokedex_v2/assets/145.png',
  '/pokedex_v2/assets/146.png',
  '/pokedex_v2/assets/147.png',
  '/pokedex_v2/assets/148.png',
  '/pokedex_v2/assets/149.png',
  '/pokedex_v2/assets/150.png',
  '/pokedex_v2/assets/151.png',
  '/pokedex_v2/assets/152.png',
  '/pokedex_v2/assets/153.png',
  '/pokedex_v2/assets/154.png',
  '/pokedex_v2/assets/155.png',
  '/pokedex_v2/assets/156.png',
  '/pokedex_v2/assets/157.png',
  '/pokedex_v2/assets/158.png',
  '/pokedex_v2/assets/159.png',
  '/pokedex_v2/assets/160.png',
  '/pokedex_v2/assets/161.png',
  '/pokedex_v2/assets/162.png',
  '/pokedex_v2/assets/163.png',
  '/pokedex_v2/assets/164.png',
  '/pokedex_v2/assets/165.png',
  '/pokedex_v2/assets/166.png',
  '/pokedex_v2/assets/167.png',
  '/pokedex_v2/assets/168.png',
  '/pokedex_v2/assets/169.png',
  '/pokedex_v2/assets/170.png',
  '/pokedex_v2/assets/171.png',
  '/pokedex_v2/assets/172.png',
  '/pokedex_v2/assets/173.png',
  '/pokedex_v2/assets/174.png',
  '/pokedex_v2/assets/175.png',
  '/pokedex_v2/assets/176.png',
  '/pokedex_v2/assets/177.png',
  '/pokedex_v2/assets/178.png',
  '/pokedex_v2/assets/179.png',
  '/pokedex_v2/assets/180.png',
  '/pokedex_v2/assets/181.png',
  '/pokedex_v2/assets/182.png',
  '/pokedex_v2/assets/183.png',
  '/pokedex_v2/assets/184.png',
  '/pokedex_v2/assets/185.png',
  '/pokedex_v2/assets/186.png',
  '/pokedex_v2/assets/187.png',
  '/pokedex_v2/assets/188.png',
  '/pokedex_v2/assets/189.png',
  '/pokedex_v2/assets/190.png',
  '/pokedex_v2/assets/191.png',
  '/pokedex_v2/assets/192.png',
  '/pokedex_v2/assets/193.png',
  '/pokedex_v2/assets/194.png',
  '/pokedex_v2/assets/195.png',
  '/pokedex_v2/assets/196.png',
  '/pokedex_v2/assets/197.png',
  '/pokedex_v2/assets/198.png',
  '/pokedex_v2/assets/199.png',
  '/pokedex_v2/assets/200.png',
  '/pokedex_v2/assets/201.png',
  '/pokedex_v2/assets/202.png',
  '/pokedex_v2/assets/203.png',
  '/pokedex_v2/assets/204.png',
  '/pokedex_v2/assets/205.png',
  '/pokedex_v2/assets/206.png',
  '/pokedex_v2/assets/207.png',
  '/pokedex_v2/assets/208.png',
  '/pokedex_v2/assets/209.png',
  '/pokedex_v2/assets/210.png',
  '/pokedex_v2/assets/211.png',
  '/pokedex_v2/assets/212.png',
  '/pokedex_v2/assets/213.png',
  '/pokedex_v2/assets/214.png',
  '/pokedex_v2/assets/215.png',
  '/pokedex_v2/assets/216.png',
  '/pokedex_v2/assets/217.png',
  '/pokedex_v2/assets/218.png',
  '/pokedex_v2/assets/219.png',
  '/pokedex_v2/assets/220.png',
  '/pokedex_v2/assets/221.png',
  '/pokedex_v2/assets/222.png',
  '/pokedex_v2/assets/223.png',
  '/pokedex_v2/assets/224.png',
  '/pokedex_v2/assets/225.png',
  '/pokedex_v2/assets/226.png',
  '/pokedex_v2/assets/227.png',
  '/pokedex_v2/assets/228.png',
  '/pokedex_v2/assets/229.png',
  '/pokedex_v2/assets/230.png',
  '/pokedex_v2/assets/231.png',
  '/pokedex_v2/assets/232.png',
  '/pokedex_v2/assets/233.png',
  '/pokedex_v2/assets/234.png',
  '/pokedex_v2/assets/235.png',
  '/pokedex_v2/assets/236.png',
  '/pokedex_v2/assets/237.png',
  '/pokedex_v2/assets/238.png',
  '/pokedex_v2/assets/239.png',
  '/pokedex_v2/assets/240.png',
  '/pokedex_v2/assets/241.png',
  '/pokedex_v2/assets/242.png',
  '/pokedex_v2/assets/243.png',
  '/pokedex_v2/assets/244.png',
  '/pokedex_v2/assets/245.png',
  '/pokedex_v2/assets/246.png',
  '/pokedex_v2/assets/247.png',
  '/pokedex_v2/assets/248.png',
  '/pokedex_v2/assets/249.png',
  '/pokedex_v2/assets/250.png',
  '/pokedex_v2/assets/251.png',
  '/pokedex_v2/assets/252.png',
  '/pokedex_v2/assets/253.png',
  '/pokedex_v2/assets/254.png',
  '/pokedex_v2/assets/255.png',
  '/pokedex_v2/assets/256.png',
  '/pokedex_v2/assets/257.png',
  '/pokedex_v2/assets/258.png',
  '/pokedex_v2/assets/259.png',
  '/pokedex_v2/assets/260.png',
  '/pokedex_v2/assets/261.png',
  '/pokedex_v2/assets/262.png',
  '/pokedex_v2/assets/263.png',
  '/pokedex_v2/assets/264.png',
  '/pokedex_v2/assets/265.png',
  '/pokedex_v2/assets/266.png',
  '/pokedex_v2/assets/267.png',
  '/pokedex_v2/assets/268.png',
  '/pokedex_v2/assets/269.png',
  '/pokedex_v2/assets/270.png',
  '/pokedex_v2/assets/271.png',
  '/pokedex_v2/assets/272.png',
  '/pokedex_v2/assets/273.png',
  '/pokedex_v2/assets/274.png',
  '/pokedex_v2/assets/275.png',
  '/pokedex_v2/assets/276.png',
  '/pokedex_v2/assets/277.png',
  '/pokedex_v2/assets/278.png',
  '/pokedex_v2/assets/279.png',
  '/pokedex_v2/assets/280.png',
  '/pokedex_v2/assets/281.png',
  '/pokedex_v2/assets/282.png',
  '/pokedex_v2/assets/283.png',
  '/pokedex_v2/assets/284.png',
  '/pokedex_v2/assets/285.png',
  '/pokedex_v2/assets/286.png',
  '/pokedex_v2/assets/287.png',
  '/pokedex_v2/assets/288.png',
  '/pokedex_v2/assets/289.png',
  '/pokedex_v2/assets/290.png',
  '/pokedex_v2/assets/291.png',
  '/pokedex_v2/assets/292.png',
  '/pokedex_v2/assets/293.png',
  '/pokedex_v2/assets/294.png',
  '/pokedex_v2/assets/295.png',
  '/pokedex_v2/assets/296.png',
  '/pokedex_v2/assets/297.png',
  '/pokedex_v2/assets/298.png',
  '/pokedex_v2/assets/299.png',
  '/pokedex_v2/assets/300.png',
  '/pokedex_v2/assets/301.png',
  '/pokedex_v2/assets/302.png',
  '/pokedex_v2/assets/303.png',
  '/pokedex_v2/assets/304.png',
  '/pokedex_v2/assets/305.png',
  '/pokedex_v2/assets/306.png',
  '/pokedex_v2/assets/307.png',
  '/pokedex_v2/assets/308.png',
  '/pokedex_v2/assets/309.png',
  '/pokedex_v2/assets/310.png',
  '/pokedex_v2/assets/311.png',
  '/pokedex_v2/assets/312.png',
  '/pokedex_v2/assets/313.png',
  '/pokedex_v2/assets/314.png',
  '/pokedex_v2/assets/315.png',
  '/pokedex_v2/assets/316.png',
  '/pokedex_v2/assets/317.png',
  '/pokedex_v2/assets/318.png',
  '/pokedex_v2/assets/319.png',
  '/pokedex_v2/assets/320.png',
  '/pokedex_v2/assets/321.png',
  '/pokedex_v2/assets/322.png',
  '/pokedex_v2/assets/323.png',
  '/pokedex_v2/assets/324.png',
  '/pokedex_v2/assets/325.png',
  '/pokedex_v2/assets/326.png',
  '/pokedex_v2/assets/327.png',
  '/pokedex_v2/assets/328.png',
  '/pokedex_v2/assets/329.png',
  '/pokedex_v2/assets/330.png',
  '/pokedex_v2/assets/331.png',
  '/pokedex_v2/assets/332.png',
  '/pokedex_v2/assets/333.png',
  '/pokedex_v2/assets/334.png',
  '/pokedex_v2/assets/335.png',
  '/pokedex_v2/assets/336.png',
  '/pokedex_v2/assets/337.png',
  '/pokedex_v2/assets/338.png',
  '/pokedex_v2/assets/339.png',
  '/pokedex_v2/assets/340.png',
  '/pokedex_v2/assets/341.png',
  '/pokedex_v2/assets/342.png',
  '/pokedex_v2/assets/343.png',
  '/pokedex_v2/assets/344.png',
  '/pokedex_v2/assets/345.png',
  '/pokedex_v2/assets/346.png',
  '/pokedex_v2/assets/347.png',
  '/pokedex_v2/assets/348.png',
  '/pokedex_v2/assets/349.png',
  '/pokedex_v2/assets/350.png',
  '/pokedex_v2/assets/351.png',
  '/pokedex_v2/assets/352.png',
  '/pokedex_v2/assets/353.png',
  '/pokedex_v2/assets/354.png',
  '/pokedex_v2/assets/355.png',
  '/pokedex_v2/assets/356.png',
  '/pokedex_v2/assets/357.png',
  '/pokedex_v2/assets/358.png',
  '/pokedex_v2/assets/359.png',
  '/pokedex_v2/assets/360.png',
  '/pokedex_v2/assets/361.png',
  '/pokedex_v2/assets/362.png',
  '/pokedex_v2/assets/363.png',
  '/pokedex_v2/assets/364.png',
  '/pokedex_v2/assets/365.png',
  '/pokedex_v2/assets/366.png',
  '/pokedex_v2/assets/367.png',
  '/pokedex_v2/assets/368.png',
  '/pokedex_v2/assets/369.png',
  '/pokedex_v2/assets/370.png',
  '/pokedex_v2/assets/371.png',
  '/pokedex_v2/assets/372.png',
  '/pokedex_v2/assets/373.png',
  '/pokedex_v2/assets/374.png',
  '/pokedex_v2/assets/375.png',
  '/pokedex_v2/assets/376.png',
  '/pokedex_v2/assets/377.png',
  '/pokedex_v2/assets/378.png',
  '/pokedex_v2/assets/379.png',
  '/pokedex_v2/assets/380.png',
  '/pokedex_v2/assets/381.png',
  '/pokedex_v2/assets/382.png',
  '/pokedex_v2/assets/383.png',
  '/pokedex_v2/assets/384.png',
  '/pokedex_v2/assets/385.png',
  '/pokedex_v2/assets/386.png',
  '/pokedex_v2/assets/387.png',
  '/pokedex_v2/assets/388.png',
  '/pokedex_v2/assets/389.png',
  '/pokedex_v2/assets/390.png',
  '/pokedex_v2/assets/391.png',
  '/pokedex_v2/assets/392.png',
  '/pokedex_v2/assets/393.png',
  '/pokedex_v2/assets/394.png',
  '/pokedex_v2/assets/395.png',
  '/pokedex_v2/assets/396.png',
  '/pokedex_v2/assets/397.png',
  '/pokedex_v2/assets/398.png',
  '/pokedex_v2/assets/399.png',
  '/pokedex_v2/assets/400.png',
  '/pokedex_v2/assets/401.png',
  '/pokedex_v2/assets/402.png',
  '/pokedex_v2/assets/403.png',
  '/pokedex_v2/assets/404.png',
  '/pokedex_v2/assets/405.png',
  '/pokedex_v2/assets/406.png',
  '/pokedex_v2/assets/407.png',
  '/pokedex_v2/assets/408.png',
  '/pokedex_v2/assets/409.png',
  '/pokedex_v2/assets/410.png',
  '/pokedex_v2/assets/411.png',
  '/pokedex_v2/assets/412.png',
  '/pokedex_v2/assets/413.png',
  '/pokedex_v2/assets/414.png',
  '/pokedex_v2/assets/415.png',
  '/pokedex_v2/assets/416.png',
  '/pokedex_v2/assets/417.png',
  '/pokedex_v2/assets/418.png',
  '/pokedex_v2/assets/419.png',
  '/pokedex_v2/assets/420.png',
  '/pokedex_v2/assets/421.png',
  '/pokedex_v2/assets/422.png',
  '/pokedex_v2/assets/423.png',
  '/pokedex_v2/assets/424.png',
  '/pokedex_v2/assets/425.png',
  '/pokedex_v2/assets/426.png',
  '/pokedex_v2/assets/427.png',
  '/pokedex_v2/assets/428.png',
  '/pokedex_v2/assets/429.png',
  '/pokedex_v2/assets/430.png',
  '/pokedex_v2/assets/431.png',
  '/pokedex_v2/assets/432.png',
  '/pokedex_v2/assets/433.png',
  '/pokedex_v2/assets/434.png',
  '/pokedex_v2/assets/435.png',
  '/pokedex_v2/assets/436.png',
  '/pokedex_v2/assets/437.png',
  '/pokedex_v2/assets/438.png',
  '/pokedex_v2/assets/439.png',
  '/pokedex_v2/assets/440.png',
  '/pokedex_v2/assets/441.png',
  '/pokedex_v2/assets/442.png',
  '/pokedex_v2/assets/443.png',
  '/pokedex_v2/assets/444.png',
  '/pokedex_v2/assets/445.png',
  '/pokedex_v2/assets/446.png',
  '/pokedex_v2/assets/447.png',
  '/pokedex_v2/assets/448.png',
  '/pokedex_v2/assets/449.png',
  '/pokedex_v2/assets/450.png',
  '/pokedex_v2/assets/451.png',
  '/pokedex_v2/assets/452.png',
  '/pokedex_v2/assets/453.png',
  '/pokedex_v2/assets/454.png',
  '/pokedex_v2/assets/455.png',
  '/pokedex_v2/assets/456.png',
  '/pokedex_v2/assets/457.png',
  '/pokedex_v2/assets/458.png',
  '/pokedex_v2/assets/459.png',
  '/pokedex_v2/assets/460.png',
  '/pokedex_v2/assets/461.png',
  '/pokedex_v2/assets/462.png',
  '/pokedex_v2/assets/463.png',
  '/pokedex_v2/assets/464.png',
  '/pokedex_v2/assets/465.png',
  '/pokedex_v2/assets/466.png',
  '/pokedex_v2/assets/467.png',
  '/pokedex_v2/assets/468.png',
  '/pokedex_v2/assets/469.png',
  '/pokedex_v2/assets/470.png',
  '/pokedex_v2/assets/471.png',
  '/pokedex_v2/assets/472.png',
  '/pokedex_v2/assets/473.png',
  '/pokedex_v2/assets/474.png',
  '/pokedex_v2/assets/475.png',
  '/pokedex_v2/assets/476.png',
  '/pokedex_v2/assets/477.png',
  '/pokedex_v2/assets/478.png',
  '/pokedex_v2/assets/479.png',
  '/pokedex_v2/assets/480.png',
  '/pokedex_v2/assets/481.png',
  '/pokedex_v2/assets/482.png',
  '/pokedex_v2/assets/483.png',
  '/pokedex_v2/assets/484.png',
  '/pokedex_v2/assets/485.png',
  '/pokedex_v2/assets/486.png',
  '/pokedex_v2/assets/487.png',
  '/pokedex_v2/assets/488.png',
  '/pokedex_v2/assets/489.png',
  '/pokedex_v2/assets/490.png',
  '/pokedex_v2/assets/491.png',
  '/pokedex_v2/assets/492.png',
  '/pokedex_v2/assets/493.png',
  '/pokedex_v2/assets/494.png',
  '/pokedex_v2/assets/495.png',
  '/pokedex_v2/assets/496.png',
  '/pokedex_v2/assets/497.png',
  '/pokedex_v2/assets/498.png',
  '/pokedex_v2/assets/499.png',
  '/pokedex_v2/assets/500.png',
  '/pokedex_v2/assets/501.png',
  '/pokedex_v2/assets/502.png',
  '/pokedex_v2/assets/503.png',
  '/pokedex_v2/assets/504.png',
  '/pokedex_v2/assets/505.png',
  '/pokedex_v2/assets/506.png',
  '/pokedex_v2/assets/507.png',
  '/pokedex_v2/assets/508.png',
  '/pokedex_v2/assets/509.png',
  '/pokedex_v2/assets/510.png',
  '/pokedex_v2/assets/511.png',
  '/pokedex_v2/assets/512.png',
  '/pokedex_v2/assets/513.png',
  '/pokedex_v2/assets/514.png',
  '/pokedex_v2/assets/515.png',
  '/pokedex_v2/assets/516.png',
  '/pokedex_v2/assets/517.png',
  '/pokedex_v2/assets/518.png',
  '/pokedex_v2/assets/519.png',
  '/pokedex_v2/assets/520.png',
  '/pokedex_v2/assets/521.png',
  '/pokedex_v2/assets/522.png',
  '/pokedex_v2/assets/523.png',
  '/pokedex_v2/assets/524.png',
  '/pokedex_v2/assets/525.png',
  '/pokedex_v2/assets/526.png',
  '/pokedex_v2/assets/527.png',
  '/pokedex_v2/assets/528.png',
  '/pokedex_v2/assets/529.png',
  '/pokedex_v2/assets/530.png',
  '/pokedex_v2/assets/531.png',
  '/pokedex_v2/assets/532.png',
  '/pokedex_v2/assets/533.png',
  '/pokedex_v2/assets/534.png',
  '/pokedex_v2/assets/535.png',
  '/pokedex_v2/assets/536.png',
  '/pokedex_v2/assets/537.png',
  '/pokedex_v2/assets/538.png',
  '/pokedex_v2/assets/539.png',
  '/pokedex_v2/assets/540.png',
  '/pokedex_v2/assets/541.png',
  '/pokedex_v2/assets/542.png',
  '/pokedex_v2/assets/543.png',
  '/pokedex_v2/assets/544.png',
  '/pokedex_v2/assets/545.png',
  '/pokedex_v2/assets/546.png',
  '/pokedex_v2/assets/547.png',
  '/pokedex_v2/assets/548.png',
  '/pokedex_v2/assets/549.png',
  '/pokedex_v2/assets/550.png',
  '/pokedex_v2/assets/551.png',
  '/pokedex_v2/assets/552.png',
  '/pokedex_v2/assets/553.png',
  '/pokedex_v2/assets/554.png',
  '/pokedex_v2/assets/555.png',
  '/pokedex_v2/assets/556.png',
  '/pokedex_v2/assets/557.png',
  '/pokedex_v2/assets/558.png',
  '/pokedex_v2/assets/559.png',
  '/pokedex_v2/assets/560.png',
  '/pokedex_v2/assets/561.png',
  '/pokedex_v2/assets/562.png',
  '/pokedex_v2/assets/563.png',
  '/pokedex_v2/assets/564.png',
  '/pokedex_v2/assets/565.png',
  '/pokedex_v2/assets/566.png',
  '/pokedex_v2/assets/567.png',
  '/pokedex_v2/assets/568.png',
  '/pokedex_v2/assets/569.png',
  '/pokedex_v2/assets/570.png',
  '/pokedex_v2/assets/571.png',
  '/pokedex_v2/assets/572.png',
  '/pokedex_v2/assets/573.png',
  '/pokedex_v2/assets/574.png',
  '/pokedex_v2/assets/575.png',
  '/pokedex_v2/assets/576.png',
  '/pokedex_v2/assets/577.png',
  '/pokedex_v2/assets/578.png',
  '/pokedex_v2/assets/579.png',
  '/pokedex_v2/assets/580.png',
  '/pokedex_v2/assets/581.png',
  '/pokedex_v2/assets/582.png',
  '/pokedex_v2/assets/583.png',
  '/pokedex_v2/assets/584.png',
  '/pokedex_v2/assets/585.png',
  '/pokedex_v2/assets/586.png',
  '/pokedex_v2/assets/587.png',
  '/pokedex_v2/assets/588.png',
  '/pokedex_v2/assets/589.png',
  '/pokedex_v2/assets/590.png',
  '/pokedex_v2/assets/591.png',
  '/pokedex_v2/assets/592.png',
  '/pokedex_v2/assets/593.png',
  '/pokedex_v2/assets/594.png',
  '/pokedex_v2/assets/595.png',
  '/pokedex_v2/assets/596.png',
  '/pokedex_v2/assets/597.png',
  '/pokedex_v2/assets/598.png',
  '/pokedex_v2/assets/599.png',
  '/pokedex_v2/assets/600.png',
  '/pokedex_v2/assets/601.png',
  '/pokedex_v2/assets/602.png',
  '/pokedex_v2/assets/603.png',
  '/pokedex_v2/assets/604.png',
  '/pokedex_v2/assets/605.png',
  '/pokedex_v2/assets/606.png',
  '/pokedex_v2/assets/607.png',
  '/pokedex_v2/assets/608.png',
  '/pokedex_v2/assets/609.png',
  '/pokedex_v2/assets/610.png',
  '/pokedex_v2/assets/611.png',
  '/pokedex_v2/assets/612.png',
  '/pokedex_v2/assets/613.png',
  '/pokedex_v2/assets/614.png',
  '/pokedex_v2/assets/615.png',
  '/pokedex_v2/assets/616.png',
  '/pokedex_v2/assets/617.png',
  '/pokedex_v2/assets/618.png',
  '/pokedex_v2/assets/619.png',
  '/pokedex_v2/assets/620.png',
  '/pokedex_v2/assets/621.png',
  '/pokedex_v2/assets/622.png',
  '/pokedex_v2/assets/623.png',
  '/pokedex_v2/assets/624.png',
  '/pokedex_v2/assets/625.png',
  '/pokedex_v2/assets/626.png',
  '/pokedex_v2/assets/627.png',
  '/pokedex_v2/assets/628.png',
  '/pokedex_v2/assets/629.png',
  '/pokedex_v2/assets/630.png',
  '/pokedex_v2/assets/631.png',
  '/pokedex_v2/assets/632.png',
  '/pokedex_v2/assets/633.png',
  '/pokedex_v2/assets/634.png',
  '/pokedex_v2/assets/635.png',
  '/pokedex_v2/assets/636.png',
  '/pokedex_v2/assets/637.png',
  '/pokedex_v2/assets/638.png',
  '/pokedex_v2/assets/639.png',
  '/pokedex_v2/assets/640.png',
  '/pokedex_v2/assets/641.png',
  '/pokedex_v2/assets/642.png',
  '/pokedex_v2/assets/643.png',
  '/pokedex_v2/assets/644.png',
  '/pokedex_v2/assets/645.png',
  '/pokedex_v2/assets/646.png',
  '/pokedex_v2/assets/647.png',
  '/pokedex_v2/assets/648.png',
  '/pokedex_v2/assets/649.png',
  '/pokedex_v2/assets/650.png',
  '/pokedex_v2/assets/651.png',
  '/pokedex_v2/assets/652.png',
  '/pokedex_v2/assets/653.png',
  '/pokedex_v2/assets/654.png',
  '/pokedex_v2/assets/655.png',
  '/pokedex_v2/assets/656.png',
  '/pokedex_v2/assets/657.png',
  '/pokedex_v2/assets/658.png',
  '/pokedex_v2/assets/659.png',
  '/pokedex_v2/assets/660.png',
  '/pokedex_v2/assets/661.png',
  '/pokedex_v2/assets/662.png',
  '/pokedex_v2/assets/663.png',
  '/pokedex_v2/assets/664.png',
  '/pokedex_v2/assets/665.png',
  '/pokedex_v2/assets/666.png',
  '/pokedex_v2/assets/667.png',
  '/pokedex_v2/assets/668.png',
  '/pokedex_v2/assets/669.png',
  '/pokedex_v2/assets/670.png',
  '/pokedex_v2/assets/671.png',
  '/pokedex_v2/assets/672.png',
  '/pokedex_v2/assets/673.png',
  '/pokedex_v2/assets/674.png',
  '/pokedex_v2/assets/675.png',
  '/pokedex_v2/assets/676.png',
  '/pokedex_v2/assets/677.png',
  '/pokedex_v2/assets/678.png',
  '/pokedex_v2/assets/679.png',
  '/pokedex_v2/assets/680.png',
  '/pokedex_v2/assets/681.png',
  '/pokedex_v2/assets/682.png',
  '/pokedex_v2/assets/683.png',
  '/pokedex_v2/assets/684.png',
  '/pokedex_v2/assets/685.png',
  '/pokedex_v2/assets/686.png',
  '/pokedex_v2/assets/687.png',
  '/pokedex_v2/assets/688.png',
  '/pokedex_v2/assets/689.png',
  '/pokedex_v2/assets/690.png',
  '/pokedex_v2/assets/691.png',
  '/pokedex_v2/assets/692.png',
  '/pokedex_v2/assets/693.png',
  '/pokedex_v2/assets/694.png',
  '/pokedex_v2/assets/695.png',
  '/pokedex_v2/assets/696.png',
  '/pokedex_v2/assets/697.png',
  '/pokedex_v2/assets/698.png',
  '/pokedex_v2/assets/699.png',
  '/pokedex_v2/assets/700.png',
  '/pokedex_v2/assets/701.png',
  '/pokedex_v2/assets/702.png',
  '/pokedex_v2/assets/703.png',
  '/pokedex_v2/assets/704.png',
  '/pokedex_v2/assets/705.png',
  '/pokedex_v2/assets/706.png',
  '/pokedex_v2/assets/707.png',
  '/pokedex_v2/assets/708.png',
  '/pokedex_v2/assets/709.png',
  '/pokedex_v2/assets/710.png',
  '/pokedex_v2/assets/711.png',
  '/pokedex_v2/assets/712.png',
  '/pokedex_v2/assets/713.png',
  '/pokedex_v2/assets/714.png',
  '/pokedex_v2/assets/715.png',
  '/pokedex_v2/assets/716.png',
  '/pokedex_v2/assets/717.png',
  '/pokedex_v2/assets/718.png',
  '/pokedex_v2/assets/719.png',
  '/pokedex_v2/assets/720.png',
  '/pokedex_v2/assets/721.png',
  '/pokedex_v2/assets/722.png',
  '/pokedex_v2/assets/723.png',
  '/pokedex_v2/assets/724.png',
  '/pokedex_v2/assets/725.png',
  '/pokedex_v2/assets/726.png',
  '/pokedex_v2/assets/727.png',
  '/pokedex_v2/assets/728.png',
  '/pokedex_v2/assets/729.png',
  '/pokedex_v2/assets/730.png',
  '/pokedex_v2/assets/731.png',
  '/pokedex_v2/assets/732.png',
  '/pokedex_v2/assets/733.png',
  '/pokedex_v2/assets/734.png',
  '/pokedex_v2/assets/735.png',
  '/pokedex_v2/assets/736.png',
  '/pokedex_v2/assets/737.png',
  '/pokedex_v2/assets/738.png',
  '/pokedex_v2/assets/739.png',
  '/pokedex_v2/assets/740.png',
  '/pokedex_v2/assets/741.png',
  '/pokedex_v2/assets/742.png',
  '/pokedex_v2/assets/743.png',
  '/pokedex_v2/assets/744.png',
  '/pokedex_v2/assets/745.png',
  '/pokedex_v2/assets/746.png',
  '/pokedex_v2/assets/747.png',
  '/pokedex_v2/assets/748.png',
  '/pokedex_v2/assets/749.png',
  '/pokedex_v2/assets/750.png',
  '/pokedex_v2/assets/751.png',
  '/pokedex_v2/assets/752.png',
  '/pokedex_v2/assets/753.png',
  '/pokedex_v2/assets/754.png',
  '/pokedex_v2/assets/755.png',
  '/pokedex_v2/assets/756.png',
  '/pokedex_v2/assets/757.png',
  '/pokedex_v2/assets/758.png',
  '/pokedex_v2/assets/759.png',
  '/pokedex_v2/assets/760.png',
  '/pokedex_v2/assets/761.png',
  '/pokedex_v2/assets/762.png',
  '/pokedex_v2/assets/763.png',
  '/pokedex_v2/assets/764.png',
  '/pokedex_v2/assets/765.png',
  '/pokedex_v2/assets/766.png',
  '/pokedex_v2/assets/767.png',
  '/pokedex_v2/assets/768.png',
  '/pokedex_v2/assets/769.png',
  '/pokedex_v2/assets/770.png',
  '/pokedex_v2/assets/771.png',
  '/pokedex_v2/assets/772.png',
  '/pokedex_v2/assets/773.png',
  '/pokedex_v2/assets/774.png',
  '/pokedex_v2/assets/775.png',
  '/pokedex_v2/assets/776.png',
  '/pokedex_v2/assets/777.png',
  '/pokedex_v2/assets/778.png',
  '/pokedex_v2/assets/779.png',
  '/pokedex_v2/assets/780.png',
  '/pokedex_v2/assets/781.png',
  '/pokedex_v2/assets/782.png',
  '/pokedex_v2/assets/783.png',
  '/pokedex_v2/assets/784.png',
  '/pokedex_v2/assets/785.png',
  '/pokedex_v2/assets/786.png',
  '/pokedex_v2/assets/787.png',
  '/pokedex_v2/assets/788.png',
  '/pokedex_v2/assets/789.png',
  '/pokedex_v2/assets/790.png',
  '/pokedex_v2/assets/791.png',
  '/pokedex_v2/assets/792.png',
  '/pokedex_v2/assets/793.png',
  '/pokedex_v2/assets/794.png',
  '/pokedex_v2/assets/795.png',
  '/pokedex_v2/assets/796.png',
  '/pokedex_v2/assets/797.png',
  '/pokedex_v2/assets/798.png',
  '/pokedex_v2/assets/799.png',
  '/pokedex_v2/assets/800.png',
  '/pokedex_v2/assets/801.png',
  '/pokedex_v2/assets/802.png',
  '/pokedex_v2/assets/803.png',
  '/pokedex_v2/assets/804.png',
  '/pokedex_v2/assets/805.png',
  '/pokedex_v2/assets/806.png',
  '/pokedex_v2/assets/807.png',
  '/pokedex_v2/assets/808.png',
  '/pokedex_v2/assets/809.png',
  '/pokedex_v2/assets/810.png',
  '/pokedex_v2/assets/811.png',
  '/pokedex_v2/assets/812.png',
  '/pokedex_v2/assets/813.png',
  '/pokedex_v2/assets/814.png',
  '/pokedex_v2/assets/815.png',
  '/pokedex_v2/assets/816.png',
  '/pokedex_v2/assets/817.png',
  '/pokedex_v2/assets/818.png',
  '/pokedex_v2/assets/819.png',
  '/pokedex_v2/assets/820.png',
  '/pokedex_v2/assets/821.png',
  '/pokedex_v2/assets/822.png',
  '/pokedex_v2/assets/823.png',
  '/pokedex_v2/assets/824.png',
  '/pokedex_v2/assets/825.png',
  '/pokedex_v2/assets/826.png',
  '/pokedex_v2/assets/827.png',
  '/pokedex_v2/assets/828.png',
  '/pokedex_v2/assets/829.png',
  '/pokedex_v2/assets/830.png',
  '/pokedex_v2/assets/831.png',
  '/pokedex_v2/assets/832.png',
  '/pokedex_v2/assets/833.png',
  '/pokedex_v2/assets/834.png',
  '/pokedex_v2/assets/835.png',
  '/pokedex_v2/assets/836.png',
  '/pokedex_v2/assets/837.png',
  '/pokedex_v2/assets/838.png',
  '/pokedex_v2/assets/839.png',
  '/pokedex_v2/assets/840.png',
  '/pokedex_v2/assets/841.png',
  '/pokedex_v2/assets/842.png',
  '/pokedex_v2/assets/843.png',
  '/pokedex_v2/assets/844.png',
  '/pokedex_v2/assets/845.png',
  '/pokedex_v2/assets/846.png',
  '/pokedex_v2/assets/847.png',
  '/pokedex_v2/assets/848.png',
  '/pokedex_v2/assets/849.png',
  '/pokedex_v2/assets/850.png',
  '/pokedex_v2/assets/851.png',
  '/pokedex_v2/assets/852.png',
  '/pokedex_v2/assets/853.png',
  '/pokedex_v2/assets/854.png',
  '/pokedex_v2/assets/855.png',
  '/pokedex_v2/assets/856.png',
  '/pokedex_v2/assets/857.png',
  '/pokedex_v2/assets/858.png',
  '/pokedex_v2/assets/859.png',
  '/pokedex_v2/assets/860.png',
  '/pokedex_v2/assets/861.png',
  '/pokedex_v2/assets/862.png',
  '/pokedex_v2/assets/863.png',
  '/pokedex_v2/assets/864.png',
  '/pokedex_v2/assets/865.png',
  '/pokedex_v2/assets/866.png',
  '/pokedex_v2/assets/867.png',
  '/pokedex_v2/assets/868.png',
  '/pokedex_v2/assets/869.png',
  '/pokedex_v2/assets/870.png',
  '/pokedex_v2/assets/871.png',
  '/pokedex_v2/assets/872.png',
  '/pokedex_v2/assets/873.png',
  '/pokedex_v2/assets/874.png',
  '/pokedex_v2/assets/875.png',
  '/pokedex_v2/assets/876.png',
  '/pokedex_v2/assets/877.png',
  '/pokedex_v2/assets/878.png',
  '/pokedex_v2/assets/879.png',
  '/pokedex_v2/assets/880.png',
  '/pokedex_v2/assets/881.png',
  '/pokedex_v2/assets/882.png',
  '/pokedex_v2/assets/883.png',
  '/pokedex_v2/assets/884.png',
  '/pokedex_v2/assets/885.png',
  '/pokedex_v2/assets/886.png',
  '/pokedex_v2/assets/887.png',
  '/pokedex_v2/assets/888.png',
  '/pokedex_v2/assets/889.png',
  '/pokedex_v2/assets/890.png',
  '/pokedex_v2/assets/891.png',
  '/pokedex_v2/assets/892.png',
  '/pokedex_v2/assets/893.png',
  '/pokedex_v2/assets/894.png',
  '/pokedex_v2/assets/895.png',
  '/pokedex_v2/assets/896.png',
  '/pokedex_v2/assets/897.png',
  '/pokedex_v2/assets/898.png',
  '/pokedex_v2/assets/loading.png',
];

self.addEventListener('install', (event) => {
  isInWebAppiOS = (window.navigator.standalone === true);
  isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);

  if (isInWebAppChrome || isInWebAppiOS) {
    alert('WEBAPP');
  }

  event.waitUntil(
    caches.open(cacheName)
      // Add your file to cache
      .then((cache) => cache.addAll(filesList))
      // Tell SW to end 'waiting' state
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    // tell browser to use this service worker and not outdated one
    self.clients.claim(),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request)),
  );
});
