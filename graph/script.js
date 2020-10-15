let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Moscou 🐻', 'Osaka ⛩️', 'Edimburgo 🏰', 'Amsterdã 🚴‍♂️'];
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B'];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [30, 10, 40, 20],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})

let ctx2 = document.getElementById('myChart2').getContext('2d');
let labels2 = ['Chicago 🍔', 'Sydney 🍰', 'Johanesburgo 🦓', 'Nantes 🥐'];
let colorHex2 = ['#23f244', '#fa2456', '#4A2A8B', '#8B0000'];

let myChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    datasets: [{
      data: [33, 13, 37, 17],
      backgroundColor: colorHex2
    }],
    labels: labels2
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})

let ctx3 = document.getElementById('myChart3').getContext('2d');
let labels3 = ['Frankfurt 🍻', 'Córdova 🍇', 'Londres 👸', 'Honolulu 🏝️'];
let colorHex3 = ['#EE7621', '#CDC673', '#FFE4E1', '#4EEE94'];

let myChart3 = new Chart(ctx3, {
  type: 'pie',
  data: {
    datasets: [{
      data: [27, 10, 40, 23],
      backgroundColor: colorHex3
    }],
    labels: labels3
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})

let ctx4 = document.getElementById('myChart4').getContext('2d');
let labels4 = ['Vancouver ⛰️', 'Monterrey 🌮', 'Bogotá 🍅', 'Génova 🍕'];
let colorHex4 = ['#A52A2A', '#006400', '#90EE90', '#BC8F8F'];

let myChart4 = new Chart(ctx4, {
  type: 'pie',
  data: {
    datasets: [{
      data: [36, 10, 40, 14],
      backgroundColor: colorHex4
    }],
    labels: labels4
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})

let ctx5 = document.getElementById('myChart5').getContext('2d');
let labels5 = ['Tel Aviv 🏖️', 'Astana 🚜', 'Tiblissi 🛤️', 'Gotemburgo 🎿'];
let colorHex5 = ['#1C1C1C', '#8B008B', '#CD4F39', '#4EEE94'];

let myChart5 = new Chart(ctx5, {
  type: 'pie',
  data: {
    datasets: [{
      data: [22, 18, 37, 23],
      backgroundColor: colorHex5
    }],
    labels: labels5
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})

let ctx6 = document.getElementById('myChart6').getContext('2d');
let labels6 = ['Reykjavik 🚢', 'Blumenau 🖥️', 'Gdansk 🚂', 'Marrakech 🏜️'];
let colorHex6 = ['#3A5FCD', '#008B45', '#8B4726', '#8B7355'];

let myChart6 = new Chart(ctx6, {
  type: 'pie',
  data: {
    datasets: [{
      data: [30, 5, 40, 25],
      backgroundColor: colorHex6
    }],
    labels: labels6
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    }
  }
})