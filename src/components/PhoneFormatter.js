import React, { useState, useEffect } from 'react';

const PhoneFormatter = ({ setPais, setTelefone }) => {
  const [countryList, setCountryList] = useState([]);
  const [ddi, setDdi] = useState('+55');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountryId, setSelectedCountryId] = useState('31');

  const formatPhone = (value, selectedId) => {
    let valor = value.replace(/\D/g, ''); 
    let format = '';

    switch (selectedId) {
      case '1':
        if (valor.length < 2) format = valor.substring(0, 1);
        else format = valor.substring(0, 1) + ' ';

        if (valor.length > 1) {
          if (valor.length < 4) format += valor.substring(1, 3);
          else format += valor.substring(1, 3) + ' ';
          if (valor.length < 6) format += valor.substring(3, 5);
          else format += valor.substring(3, 5) + ' ';
          if (valor.length < 8) format += valor.substring(5, 7);
          else format += valor.substring(5, 7) + ' ';
          if (valor.length > 6) format += valor.substring(7, 9);
          else format += valor.substring(9);
        } else format += valor.substring(1);
        break;

      case '2':
        if (valor.length < 2) format = valor.substring(0, 1);
        else format = valor.substring(0, 1) + ' ';

        if (valor.length > 1) {
          if (valor.length < 6) format += valor.substring(1, 5);
          else format += valor.substring(1, 5) + ' ';
          if (valor.length > 5) format += valor.substring(5, 9);
          else format += valor.substring(9);
        } else format += valor.substring(1);
        break;

      case '3':
        if (valor.length < 3) format = valor.substring(0, 2);
        else format = valor.substring(0, 2) + ' ';

        if (valor.length > 2) {
          if (valor.length < 5) format += valor.substring(2, 4);
          else format += valor.substring(2, 4) + ' ';
          if (valor.length > 4) format += valor.substring(4, 6);
          else format += valor.substring(6);
        } else format += valor.substring(2);
        break;

      case '4':
        if (valor.length < 3) format = valor.substring(0, 2);
        else format = valor.substring(0, 2) + ' ';

        if (valor.length > 2) {
          if (valor.length < 5) format += valor.substring(2, 4);
          else format += valor.substring(2, 4) + ' ';
          if (valor.length < 7) format += valor.substring(4, 6);
          else format += valor.substring(4, 6) + ' ';
          if (valor.length > 4) format += valor.substring(6, 8);
          else format += valor.substring(8);
        } else format += valor.substring(2);
        break;

      case '5':
        if (valor.length < 3) format = valor.substring(0, 2);
        else format = valor.substring(0, 2) + ' ';

        if (valor.length > 2) {
          if (valor.length < 5) format += valor.substring(2, 4);
          else format += valor.substring(2, 4) + ' ';
          if (valor.length > 4) format += valor.substring(4, 9);
          else format += valor.substring(9);
        } else format += valor.substring(2);
        break;

      case '6':
        if (valor.length < 3) format = valor.substring(0, 2);
        else format = valor.substring(0, 2) + ' ';

        if (valor.length > 2) {
          if (valor.length < 6) format += valor.substring(2, 5);
          else format += valor.substring(2, 5) + ' ';
          if (valor.length < 8) format += valor.substring(5, 7);
          else format += valor.substring(5, 7) + ' ';
          if (valor.length > 7) format += valor.substring(7, 9);
          else format += valor.substring(9);
        } else format += valor.substring(2);
        break;

      case '7':
        if (valor.length < 3) format = valor.substring(0, 2);
        else format = valor.substring(0, 2) + ' ';

        if (valor.length > 2) {
          if (valor.length < 6) format += valor.substring(2, 5);
          else format += valor.substring(2, 5) + ' ';
          if (valor.length > 5) format += valor.substring(5, 8);
          else format += valor.substring(8);
        } else format += valor.substring(2);
        break;

      case '8':
        if (valor.length < 3) format = valor.substring(0, 2);
        else format = valor.substring(0, 2) + ' ';

        if (valor.length > 2) {
          if (valor.length < 6) format += valor.substring(2, 5);
          else format += valor.substring(2, 5) + ' ';
          if (valor.length > 5) format += valor.substring(5, 9);
          else format += valor.substring(9);
        } else format += valor.substring(2);
        break;

      case '9':
        if (valor.length < 3) format = valor.substring(0, 2);
        else format = valor.substring(0, 2) + ' ';

        if (valor.length > 2) format += valor.substring(2, 6);
        else format += valor.substring(2);
        break;

      case '10':
        if (valor.length < 3) format = valor.substring(0, 2);
        else format = valor.substring(0, 2) + ' ';

        if (valor.length > 2) {
          if (valor.length < 7) format += valor.substring(2, 6);
          else format += valor.substring(2, 6) + ' ';
          if (valor.length > 6) format += valor.substring(6, 9);
          else format += valor.substring(7);
        } else format += valor.substring(2);
        break;

        case '11':
          if (valor.length < 3) format = valor.substring(0, 2);
          else format = valor.substring(0, 2) + ' ';
    
          if (valor.length > 2) {
            if (valor.length < 7) format += valor.substring(2, 6);
            else format += valor.substring(2, 6) + ' ';
            if (valor.length > 6) format += valor.substring(6, 10);
            else format += valor.substring(7);
          } else format += valor.substring(2);
          break;
    
        case '12':
          if (valor.length < 3) format = valor.substring(0, 2);
          else format = valor.substring(0, 2) + ' ';
    
          if (valor.length > 2) {
            if (valor.length < 7) format += valor.substring(2, 7);
            else format += valor.substring(2, 7);
          } else format += valor.substring(2);
          break;
    
        case '13':
          if (valor.length < 3) format = valor.substring(0, 2);
          else format = valor.substring(0, 2) + ' ';
    
          if (valor.length > 2) {
            if (valor.length < 8) format += valor.substring(2, 8);
            else format += valor.substring(2, 8);
          } else format += valor.substring(2);
          break;
    
        case '14':
          if (valor.length < 4) format = valor.substring(0, 3);
          else format = valor.substring(0, 3) + ' ';
    
          if (valor.length > 3) {
            if (valor.length < 6) format += valor.substring(3, 5);
            else format += valor.substring(3, 5) + ' ';
            if (valor.length > 5) format += valor.substring(5, 7);
            else format += valor.substring(7);
          } else format += valor.substring(3);
          break;
    
        case '15':
          if (valor.length < 4) format = valor.substring(0, 3);
          else format = valor.substring(0, 3) + ' ';
    
          if (valor.length > 2) {
            if (valor.length < 7) format += valor.substring(3, 6);
            else format += valor.substring(3, 6);
          } else format += valor.substring(3);
          break;
    
        case '16':
          if (valor.length < 4) format = valor.substring(0, 3);
          else format = valor.substring(0, 3) + ' ';
    
          if (valor.length > 2) {
            if (valor.length < 7) format += valor.substring(3, 6);
            else format += valor.substring(3, 6) + ' ';
            if (valor.length > 5) format += valor.substring(6, 9);
            else format += valor.substring(6);
          } else format += valor.substring(3);
          break;
    
        case '17':
          if (valor.length < 4) format = valor.substring(0, 3);
          else format = valor.substring(0, 3) + ' ';
    
          if (valor.length > 2) {
            if (valor.length < 7) format += valor.substring(3, 6);
            else format += valor.substring(3, 6) + ' ';
            if (valor.length > 5) format += valor.substring(6, 10);
            else format += valor.substring(6);
          } else format += valor.substring(3);
          break;
    
        case '18':
          if (valor.length < 4) format = valor.substring(0, 3);
          else format = valor.substring(0, 3) + ' ';
    
          if (valor.length > 2) {
            if (valor.length < 7) format += valor.substring(3, 6);
            else format += valor.substring(3, 7);
          } else format += valor.substring(3);
          break;
    
        case '19':
          if (valor.length < 4) format = valor.substring(0, 3);
          else format = valor.substring(0, 3) + ' ';
    
          if (valor.length > 2) {
            if (valor.length < 8) format += valor.substring(3, 7);
            else format += valor.substring(3, 7) + ' ';
            if (valor.length > 6) format += valor.substring(7, 11);
            else format += valor.substring(7);
          } else format += valor.substring(3);
          break;
    
        case '20':
          if (valor.length < 4) format = valor.substring(0, 3);
          else format = valor.substring(0, 3) + ' ';
    
          if (valor.length > 2) {
            if (valor.length < 7) format += valor.substring(3, 6);
            else format += valor.substring(3, 8);
          } else format += valor.substring(3);
          break;

          case '21': // Format for code 21 (e.g., 21)
          if (valor.length < 5) format = valor.substring(0, 4);
          else format = valor.substring(0, 4) + ' ';
          
          if (valor.length > 4) {
            if (valor.length < 8) format += valor.substring(4, 7);
            else format += valor.substring(4, 7) + ' ';
            
            if (valor.length > 7) format += valor.substring(7, 10);
            else format += valor.substring(7);
          } else format += valor.substring(4);
          break;
    
        case '22': // Format for code 22 (e.g., 22)
          if (valor.length < 5) format = valor.substring(0, 4);
          else format = valor.substring(0, 4) + ' ';
          
          if (valor.length > 4) {
            if (valor.length < 8) format += valor.substring(4, 7);
            else format += valor.substring(4, 7) + ' ';
            
            if (valor.length > 7) format += valor.substring(7, 11);
            else format += valor.substring(7);
          } else format += valor.substring(4);
          break;
    
        case '23': // Format for code 23
          if (valor.length < 5) format = valor.substring(0, 4);
          else format = valor.substring(0, 4) + ' ';
          
          if (valor.length > 3) format += valor.substring(4, 8);
          else format += valor.substring(4);
          break;
    
        case '24':
        case '26': // Formats for codes 24 and 26
          if (valor.length < 5) format = valor.substring(0, 4);
          else format = valor.substring(0, 4) + ' ';
          
          if (valor.length > 3) format += valor.substring(4, 10);
          else format += valor.substring(4);
          break;
    
        case '25': // Format for code 25
          if (valor.length < 6) format = valor.substring(0, 5);
          break;
    
        case '27': // Format for code 27
          if (valor.length < 6) format = valor.substring(0, 5);
          else format = valor.substring(0, 5) + ' ';
          
          if (valor.length > 4) format += valor.substring(5, 9);
          else format += valor.substring(5);
          break;
    
        case '28': // Format for code 28
          if (valor.length < 4) format = valor.substring(0, 3);
          else format = valor.substring(0, 3) + '-';
          
          if (valor.length > 2) {
            if (valor.length < 7) format += valor.substring(3, 6);
            else format += valor.substring(3, 7);
          } else format += valor.substring(3);
          break;
    
        case '29': // Format for code 29
          if (valor.length < 3) format = valor.substring(0, 2);
          else format = valor.substring(0, 2) + '-';
          
          if (valor.length > 2) {
            if (valor.length < 6) format += valor.substring(2, 5);
            else format += valor.substring(2, 5) + '-';
    
            if (valor.length > 4) format += valor.substring(5, 9);
            else format += valor.substring(9);
          } else format += valor.substring(2);
          break;
          case '30':
            if (valor.length < 3) format = valor.substring(0, 2);
            else format = valor.substring(0, 2) + '-';
            
            if (valor.length > 2) {
                if (valor.length < 7) format += valor.substring(2, 6);
                else format += valor.substring(2, 6) + ' ';
                
                if (valor.length > 6) format += valor.substring(6, 10);
                else format += valor.substring(7);
            } else format += valor.substring(2);
            break;

        case '31':
            if (valor.length < 3) format = valor.substring(0, 2);
            else format = '(' + valor.substring(0, 2) + ') ';

            if (valor.length > 2) {
                if (valor.length < 8) format += valor.substring(2, 7);
                else format += valor.substring(2, 7) + '-';
                
                if (valor.length > 7) format += valor.substring(7, 11);
                else format += valor.substring(7);
            } else format += valor.substring(2);
            break;

        case '32':
            if (valor.length < 4) format = valor.substring(0, 3);
            else format = '(' + valor.substring(0, 3) + ') ';

            if (valor.length > 3) {
                if (valor.length < 7) format += valor.substring(3, 6);
                else format += valor.substring(3, 6) + '-';
                
                if (valor.length > 6) format += valor.substring(6, 10);
                else format += valor.substring(6);
            } else format += valor.substring(3);
            break;

        case '33':
            if (valor.length < 3) format = valor.substring(0, 2);
            else format = valor.substring(0, 2) + ' ';

            if (valor.length > 2) {
                if (valor.length < 6) format += valor.substring(2, 5);
                else format += valor.substring(2, 5) + '-';
                
                if (valor.length < 8) format += valor.substring(5, 7);
                else format += valor.substring(5, 7) + '-';
                
                if (valor.length > 6) format += valor.substring(7, 9);
                else format += valor.substring(10);
            } else format += valor.substring(2);
            break;

        case '34':
            if (valor.length < 3) format = valor.substring(0, 2);
            else format = valor.substring(0, 2) + ' ';

            if (valor.length > 2) {
                if (valor.length < 6) format += valor.substring(2, 6);
                else format += valor.substring(2, 6) + '-';
                
                if (valor.length > 6) format += valor.substring(6, 10);
                else format += valor.substring(7);
            } else format += valor.substring(2);
            break;

        case '35':
            if (valor.length < 4) format = valor.substring(0, 3);
            else format = valor.substring(0, 3) + ' ';

            if (valor.length > 2) {
                if (valor.length < 7) format += valor.substring(3, 6);
                else format += valor.substring(3, 6) + '-';
                
                if (valor.length < 9) format += valor.substring(6, 8);
                else format += valor.substring(6, 8) + '-';
                
                if (valor.length > 7) format += valor.substring(8, 10);
                else format += valor.substring(10);
            } else format += valor.substring(2);
            break;

      default:
        format = valor; 
    }

    return format;
  };

  const handlePhoneChange = (event) => {
    const formatted = formatPhone(event.target.value, selectedCountryId);
    setPhoneNumber(formatted);
    setTelefone(formatted); 
  };

  useEffect(() => {
    fetch('archives/DDIs.csv')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').slice(2); 
        const countries = lines.map(line => {
          const [country, countryDdi, id] = line.split(';');
          return { country, ddi: countryDdi, id };
        });
        setCountryList(countries);
      })
      .catch(error => console.error('Erro ao carregar o arquivo CSV:', error));
  }, []);

  const handleCountryChange = (event) => {
    const selectedDdi = event.target.value;
    const selectedCountry = countryList.find(country => country.ddi === selectedDdi);
    if (selectedCountry) {
      setDdi(selectedDdi);
      setSelectedCountryId(selectedCountry.id);
      setPais(selectedDdi);
    }
  };

  return (
    <section>
      <div className="d-flex">
        <label htmlFor="country">Selecione o país:</label>
        <div className="form-floating mb-3 mx-2">
          <select id="country" name="pais" className="select-input" onChange={handleCountryChange}>
            {countryList.map((country, index) => (
              <option key={index} value={country.ddi}>
                {country.country}
              </option>
            ))}
          </select>
        </div>
        </div>
        <div><label htmlFor="floatingWpp">Whatsapp:*</label><br /></div>
        <div className="input-group mb-3">
          <span className="input-group-text code-ddi" id="basic-addon1">
            <span id="ddi">{ddi}</span>
          </span>
          <input
            type="text"
            name="telefone"
            className="form-control"
            id="floatingWpp"
            value={phoneNumber}
            onChange={handlePhoneChange}
            aria-label="Phone number"
            aria-describedby="basic-addon1"
            required
          />
        </div>
    </section>
  );
};

export default PhoneFormatter;