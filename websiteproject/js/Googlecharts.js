// Data for the company
google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
         data.addColumn('string', 'Year');
        data.addColumn('string', 'Quarter');
        data.addColumn('string', 'Region');
        data.addColumn('string', 'Regional Manager');
        data.addColumn('number', 'Sales');
        data.addRows([
          ['2013', '1', 'South East' , 'John', {v: 14013, f: '$14,013'}],
          ['2013', '2', 'South East' , 'John', {v: 18600, f: '$18,600'} ],
          ['2013', '3', 'South East' , 'Leonardo', {v: 23353, f: '$23,353'} ],
          ['2013', '4', 'South East' , 'Leonardo', {v: 20756, f: '$20,756'}],
          ['2013', '1', 'North East' , 'Paul', {v: 24149, f: '$24,149'}],
          ['2013', '2', 'North East' , 'Paul', {v: 13119, f: '$13,119'} ],
          ['2013', '3', 'North East' , 'Paul', {v: 23284, f: '$23,284'} ],
          ['2013', '4', 'North East' , 'Paul', {v: 12697, f: '$12,697'}],
          ['2013', '1', 'South West' , 'George', {v: 23409, f: '$23,409'}],
          ['2013', '2', 'South West' , 'George', {v: 13113, f: '$13,113'} ],
          ['2013', '3', 'South West' , 'George', {v: 17097, f: '$17,097'} ],
          ['2013', '4', 'South West' , 'Michelangelo', {v: 21796, f: '$21,796'}],
          ['2013', '1', 'North West' , 'Ringo', {v: 22486, f: '$22,486'}],
          ['2013', '2', 'North West' , 'Raphael', {v: 18383, f: '$18,383'} ],
          ['2013', '3', 'North West' , 'Raphael', {v: 19190, f: '$19,190'} ],
          ['2013', '4', 'North West' , 'Raphael', {v: 21011, f: '$21,011'}],
          ['2014', '1', 'South East' , 'Leonardo', {v: 18378, f: '$18,378'}],
          ['2014', '2', 'South East' , 'Leonardo', {v: 22284, f: '$22,284'} ],
          ['2014', '3', 'South East' , 'Donatello', {v: 24473, f: '$24,473'} ],
          ['2014', '4', 'South East' , 'Donatello', {v: 16286, f: '$16,286'}],
          ['2014', '1', 'North East' , 'Paul', {v: 21630, f: '$21,630'}],
          ['2014', '2', 'North East' , 'Paul', {v: 19603, f: '$19,603'} ],
          ['2014', '3', 'North East' , 'Paul', {v: 23947, f: '$23,947'} ],
          ['2014', '4', 'North East' , 'Paul', {v: 22444, f: '$22,444'}],
          ['2014', '1', 'South West' , 'Michelangelo', {v: 11436, f: '$11,436'}],
          ['2014', '2', 'South West' , 'Michelangelo', {v: 18152, f: '$18,152'} ],
          ['2014', '3', 'South West' , 'Michelangelo', {v: 17919, f: '$17,919'} ],
          ['2014', '4', 'South West' , 'Michelangelo', {v: 12747, f: '$12,747'}],
          ['2014', '1', 'North West' , 'Raphael', {v: 15282, f: '$15,282'}],
          ['2014', '2', 'North West' , 'Raphael', {v: 16454, f: '$16,454'} ],
          ['2014', '3', 'North West' , 'Raphael', {v: 19653, f: '$19,653'} ],
          ['2014', '4', 'North West' , 'Raphael', {v: 10284, f: '$10,284'}],
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }
