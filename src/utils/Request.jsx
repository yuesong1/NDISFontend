export function postRequest(targetUrl, payload) {
    // const history=new useNavigate();
    const result = fetch(targetUrl, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: payload,
      });
      result.then(data => {
        if (data.status === 200) {
          data.json().then(res => {
            alert('Request Success')
            // history('../')
          })
        } else if (data.status === 400) {
          alert('Invalid Request')
        }
      })
}

export function getRequest(targetUrl, setData) {
    // const history=new useNavigate();
    const result = fetch(targetUrl, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });
      result.then(data => {
          data.json().then(res => {
                setData(res)
          })
      })
}