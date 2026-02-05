function toggle(){
    var ham = document.querySelector('.sidebar-container');
    ham.classList.toggle('activeHam');
}

 const tabs = document.querySelectorAll(".tab");

 tabs.forEach(event=>{
    event.addEventListener('click',()=>{
        tabs.forEach(inner_Tab => inner_Tab.classList.remove('active'));
        event.classList.add('active')
    })
 })


//  Chart Section Code
    var options = {
      chart: {
        type: 'area',
        zoom: { enabled: false },
        toolbar: { show: false },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3,
        colors: ['#ef4444']
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.1,
          stops: [0, 90, 100],
          colorStops: [{
            offset: 0,
            color: '#ef4444',
            opacity: 0.5
          }, {
            offset: 100,
            color: '#fecaca',
            opacity: 0.1
          }]
        }
      },
      series: [{
        name: 'Churn Rate',
        data: [
          { x: 'Jan', y: 5.2 },
          { x: 'Feb', y: 3.8 },
          { x: 'Mar', y: 6.1 },
          { x: 'Apr', y: 4.4 },
          { x: 'May', y: 5.9 },
          { x: 'Jun', y: 3.5 },
          { x: 'Jul', y: 4.8 },
          { x: 'Aug', y: 4.26 },
          { x: 'Sep', y: 5.0 },
          { x: 'Oct', y: 3.9 }
        ]
      }],
      xaxis: {
        type: 'category',
        labels: { style: { colors: '#fff', fontSize: '14px',display:'none' } }
      },
      yaxis: {
        show: false  // Poora Y-axis hide (numbers, ticks, line sab gayab) → chart full space lega
      },
      dataLabels: {
        enabled: false  // ← Yeh important! Point pe koi number (jaise 6.1) nahi dikhega
      },
      tooltip: {
        shared: true,
        intersect: false,
        x: { show: false },
        y: {
          formatter: val => `<p>${val.toFixed(2)}%</p>`,
          title: { formatter: () => '' }
        },
        style: { fontSize: '13px', fontFamily: 'inherit' },
        marker: { show: true }
      },
      crosshairs: {
        show: true,
        position: 'back',
        stroke: {
          color: '#ef4444',
          width: 1,
          dashArray: 4
        }
      },
      markers: {
        size: 0,
        hover: { size: 1 }
      },
      grid: {
        borderColor: '#e2e8f0',
        strokeDashArray: 4
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();