function numberToRupeesInWords() {

    let num = +document.getElementById('text').value;

    const a = ['', 'One ', 'Two ', 'Three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'Ten ', 'eleven ', 'Twelve ', 'Thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    const b = ['', '', 'Twenty', 'Thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


        if ((num = num.toString()).length > 9) return 'overflow';
        n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return; var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
       
    

    document.querySelector('#input').innerHTML = `Rupess In Number : - ${document.getElementById('text').value}`;
    document.querySelector('#output').innerHTML = `Rupess In Words : - ${str}`;


}
