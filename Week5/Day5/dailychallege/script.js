

const access_key = '075d15d60a95b06528ad8d5812e3d35e'

const list_url = `http://www.apilayer.net/api/list?access_key=${access_key}`

const rate_url = `http://www.apilayer.net/api/live?access_key=${access_key}`

const root = document.getElementById("root")

const getList = async () => {
try {
  const response = await fetch(list_url)
  const data = await response.json()
  return data.currencies;

}
  catch(e){
    throw new Error('Unable to get data from list')
  }
}

const createList = async(array, elm) =>{
  // const list = await getList();
  // const array = Object.entries(list)
  // console.log(array);

  const select = document.createElement('SELECT');
  select.setAttribute('id', elm)
  select.setAttribute('name', elm)

  root.appendChild(select)

  let option = document.createElement('OPTION');
  option.setAttribute('value', '');
  option.innerText = 'Please Select Currency'
  select.appendChild(option);

  array.forEach(([key,value]) => {
      let option = new Option(value,key);
      select.appendChild(option)

  });

}

const getExchangeRate = async(fromCurrency, toCurrency) => {
  try{
    const response = await fetch(rate_url);
    const rate = await response.json()
    const rates = rate.quotes;

    const exchangeRate = rates['USD' + toCurrency]

    return exchangeRate;


  }
  catch (e){
    throw new Error('unable to get data')

  }

}

const createUI = async () => {
  const list = await getList();
  const array = Object.entries(list);
  createList(array, 'from');
  createList(array, 'to');

  let amount = document.createElement('input')
  amount.setAttribute('id', 'amount');
  amount.setAttribute('placeholder', 'Amount')
  root.appendChild(amount)

  let button = document.createElement('button')
  button.setAttribute('id', 'button')
  button.innerText = 'calculate'
  root.appendChild(button)

  let messageDiv = document.createElement('div')
  root.appendChild(messageDiv);

  button.addEventListener('click', async function(){
    let fromCurrency = document.querySelector('#from').value;
    let toCurrency = document.querySelector('#to').value;
    let amount = document.querySelector('#amount').value;
    // console.log(fromCurrency, toCurrency, amount);
    let rate = await getExchangeRate(fromCurrency, toCurrency);
    const convertedAmount = (amount * rate).toFixed(2);
    messageDiv.innerText = `From ${fromCurrency} to ${toCurrency} = ${convertedAmount}`



  })
}

createUI()
