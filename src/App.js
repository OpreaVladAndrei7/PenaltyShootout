import { useState, useEffect } from 'react';
//import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import footballClubs from './seeds';

const App = () => {
    const [clubs] = useState(footballClubs);
    const [searchField, setSearchField] = useState("");
    const [filteredClubs, setFilteredClubs]= useState(clubs);
    
  
    const  onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
   useEffect (() => {
    const newFilteredClubs = clubs.filter((team) => {
      return team.name.toLowerCase().includes(searchField);
    });
    setFilteredClubs(newFilteredClubs);
   }, [clubs, searchField]);
   
       
    
  return (
    <div className="App">
      <h1 id="app-title">Penalty Shootout</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder={"Search Kits"} className={"search-box"}/>
      <CardList clubs={filteredClubs} />
    </div>
  );
}

/* 
 class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      clubs: [
        {
          "name": "Bayern München",
          "code": "FCB",
          "country": "Germany",
          "kitURL": "https://cdn.pesmaster.com/kits/2023/04/28/644bc1b28b9a2.jpg",
        },
        {
          "name": "Borussia Dortmund",
          "code": "BVB",
          "country": "Germany",
          "kitURL": "https://www.sportsdirect.com/images/products/37882213_h.jpg"
        },
        {
          "name": "RB Leipzig",
          "code": "RBL",
          "country": "Germany",
          "kitURL":"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKhuathfLdduvxkJ-hoErIm5UF4LndWnGksgl5bMeEGuTsZ08TnB6MMMnwGyQU25Ff0_uWuQF8URo58d2Bp5qi5uC_RIV4vtaCIIPog6BgtvtyQH3MamdIiwpxn8Zokd5jEmFaw4NDMwa_pmYjtsSAckK5wlbBeVvZqarbFGcbq-DWhUsW9_d53Yb6/s1600/RBL1a.jpg"
        },
        {
          "name": "Manchester United FC",
          "code": "MUN",
          "country": "England",
          "kitURL":"https://www.sportsdirect.com/images/imgzoom/37/37893508_xxl.jpg"
        },
        {
          "name": "Manchester City FC",
          "code": "MCI",
          "country": "England",
          "kitURL":"https://www.sportsdirect.com/images/imgzoom/37/37840918_xxl.jpg"
        },
        {
          "name": "Arsenal FC",
          "code": "ARS",
          "country": "England",
          "kitURL": "https://www.sportsdirect.com/images/imgzoom/37/37789508_xxl.jpg"
        },
        {
          "name": "Liverpool FC",
          "code": "LIV",
          "country": "England",
          "kitURL":"https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/G/F/51119_1653575963.jpg"
        },
        {
          "name": "Chelsea FC",
          "code": "CHE",
          "country": "England",
          "kitURL":"https://www.sportsdirect.com/images/imgzoom/37/37834118_xxl.jpg"
        },
        {
          "name": "Athletic Club Bilbao",
          "code": "ATH",
          "country": "Spain",
          "kitURL":"https://images.footballfanatics.com/athletic-club-bilbao/athletic-bilbao-home-shirt-2023-24_ss5_p-13367862+pv-2+u-wfy1b1p5fmq5uzpuopep+v-5ctfrbqxsgpkrn6qzbo3.jpg?_hv=2&w=900"
        },
        {
          "name": "FC Barcelona",
          "code": "BAR",
          "country": "Spain",
          "kitURL":"https://images.media-arocam.com/R0D2xZ8A8L3xBX3pQxarjyPOdfk=/fit-in/1000x1000/FCB-23-HAM-GAV/YnGTLXE3_HAM2.png"
        },
        {
          "name": "Real Madrid",
          "code": "RMD",
          "country": "Spain",
          "kitURL": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy7v58lSoyv3Y9ZimSXrvM0YUQrb2E14P5TlDIE7VC7VZBQMiiWul8bxB5QUJ-yTbhx03lBGhdz8F39G7z9Q81vjj-SFhPsPx0qdWI0iZ7GrUlkW-_4bK_okN9fIDSZ8zHe4lXm_TKdc1enLS98yOsX1tiExXpp5QjnpmQP0G6ScGASD7xJTbVH7Cj0Q/s1600/Real%20Madrid%2022-23%20Home%20Kit%20%287%29.jpg"
        },
        {
          "name": "Villarreal CF",
          "code": "VLL",
          "country": "Spain",
          "kitURL":"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwq2ZDC88v2inGriJ_176CtnIiaiS6vkySOLQebkgy60zc7ELG3jBGLlVa-ZANU7nNqgDPoWUXIqlCYew_QtXb4ufcIgaF2uw52mo0FmP1aG7wJL4UYjXKF-t1Mho8L5_e6tVsUrIEzGx9OEmj4usDvFWSDOKAGoR1yFfVZxpM_JP8TueB3vDYzK8M/s1000/Villarreal%2023-24%20Home%20Kit%20%20%287%29.jpg"
        },
        {
          "name": "Atlético Madrid",
          "code": "ATL",
          "country": "Spain",
          "kitURL":"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOQ3Z_ga0tYIX-jwq6F1AlrK8aPtXyoQNtQrkJ-8nv4G6ldqK3IviuRFETxCvRAwGuobo7fUMr8LT-gBBPDObnUG9k6Yj_dVzTo0c4MEzmD2ScvDTPZthVAUbBZWdR89WubE7iKvkrTYDkpI7VAW78WqHXPSIy9vkWlas4fVStXk9kvikdNgQgA4l06A/s1600/Atl%C3%A9tico%20Madrid%2022-23%20Home%20&%20Away%20Kits%20%20%286%29.jpg"
        },
        {
          "name": "Sevilla FC",
          "code": "SEV",
          "country": "Spain",
          "kitURL": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieHls5Qryv5-shQW6blnIguvvX5a13n7EN6yOY2ygvYSMYMPyvHtyuENE9GhxmxpwIRMmWkdzRZWU3VUXgm1V7UyCziYFYeogglSE7EPLk7fTbJ4gUShPj1dZ6VfCq5e-_R7dZlSp14Mtbk_qiJjw-QQmB3YLIvoGEyTCiJCxLoEnNWpfMfgPm_zOn1w/s1600/Sevilla%2022-23%20home-away.jpg"
        },
        {
          "name": "Lille OSC",
          "code": "LOSC",
          "country": "France",
          "kitURL": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihsmOFv-rp2iX3U0dTME7xryBfLbYrbo3qH-kCAvvE3W5Rv0ZzqgSBFtbsxgF9NJL6DcMLiNChznS9a6UJPKmL0AuOyKczeOab_aT00TrQQkRnhmF3_WVl-psDpVm3ipoL0Fhkpr9KrbFm6riXIeSasH8myH4FDHh5kUIsAUTgV1dmj5ricULowAEL/s1600/Lille1a.jpg"
        },
        {
          "name": "AS Monaco",
          "code": "ASM",
          "country": "Monaco",
          "kitURL": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrlLuh6jfyD9S21V2z0jok7nEQjVgtdI7b972wduKaoU9qMJQQUHyFbHle35LPgQAov3bcwaVJ8sDn54igUMLQoDdkpQRzJTg1q6wXNf8XEuBf5XKWGRQYirihqdxFMfwq4C73ePwpKXK97vUiMhAFXpX9LFvrRtR6xd3f-bMj1L7ahs7M4r8KFMsP/s1600/as-monaco-22-23-kit-1.jpg"
        },
        {
          "name": "OGC Nice",
          "code": "OGCN",
          "country": "France",
          "kitURL":"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgywjDKOncHHW4IlxqB1wy-xRZPSv-gZKDzhAPOSbuwpX-WwYNnkGo-_Abli_gvCe2ggPYxzEhT3BOrxfCUKGGI-xcyD4OFQ34GvRmYlfnckIFJNYSRrvxGd9KLMGxjKgOq7E5vlJpbAR1UbhTiQY2yqNlgBdG5GzAHQ5l9Fs9RIPqndQa7snnhyGZ3aNU/s1600/nice-23-24-home-kit%20%283%29.jpg"
        },
        {
          "name": "Olympique Lyonnais",
          "code": "OL",
          "country": "France",
          "kitURL": "https://images.classicfootballshirts.co.uk/pub/media/catalog/product/4/0/4066761075523-1_dxeinzh0jcceynm1.jpg"
        },
        {
          "name": "AS Saint-Étienne",
          "code": "ASSE",
          "country": "France",
          "kitURL": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidUjN0UG57A45TlF8h6IG-eIurlThlBJ9BGR9Uu4tDSPNsHTv4zBMYutaAxfDKz3FLBXxQG4vtyp4vNtXC1Cx0BUET3LViV_IElzMpesbLJal1EeJ2IfyplBo3dn8_VLQImH1PfqGf5zYMIq9p2Y3B92ioXSWO6SRTggHnJkGzs2RkHRe99V4Q01Q5sw/s1600/asse%2022%2023%20kits%20%283%29.jpg "
        },
        {
          "name": "Olympique de Marseille",
          "code": "OM",
          "country": "France",
          "kitURL": "https://www.sportsdirect.com/images/imgzoom/37/37883101_xxl.jpg"
        },
        {
          "name": "Paris Saint-Germain",
          "code": "PSG",
          "country": "France",
          "kitURL": "https://footdealer.co/wp-content/uploads/2023/06/Maillot-PSG-Domicile-2023-2024-1-768x768.jpg"
        }, {
          "name": "ACF Fiorentina",
          "code": "FIO",
          "country": "Italy",
          "kitURL": "https://www.fiorentinastore.com/images/fiorentina/products/large/FI23A01.webp"
        },
        {
          "name": "AS Roma",
          "code": "ROM",
          "country": "Italy",
          "kitURL": "https://www.soccerpro.com/wp-content/uploads/ik7166_adidas_as_roma_home_stadium_jsy_2023_24_01.jpg"
        },
        {
          "name": "SSC Napoli",
          "code": "NAP",
          "country": "Italy",
          "kitURL":"https://static.sscnapoli.it/img/p/6/9/5/7/6957-large_default.jpg"
        },
        {
          "name": "Juventus",
          "code": "JUV",
          "country": "Italy",
          "kitURL": "https://store.juventus.com/data/store/product/5/59355/product.jpg"
        },
        {
          "name": "AC Milan",
          "code": "MIL",
          "country": "Italy",
          "kitURL": "https://www.futbolemotion.com/imagesarticulos/200071/grandes/camiseta-puma-ac-milan-primera-equipacion-2023-2024-adulto-red-puma-black-0.jpg"
        },
        {
          "name": "FC Internazionale Milano",
          "code": "INT",
          "country": "Italy",
          "kitURL":"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6r3aCYvh2jj4KTrIOWqIryU0v6qnQyZRLV4zLplha0An2_OFuxy0Lyr9U_4W8GGdvAD63dE9KDQEWTAquZPHIfdxj-PiTiWWT11OaHevsPU1RpX5TyM1YRZ4yKdEOkvFVDN28-WZ4cJbTAnCHEoNY-sUlDKDik_1fsH6GW_dW7YjKWwS5jgiCzrz7Nds/s1600/inter%2023%2024%20kit%20home%20%2814%29.jpg"
        },
        {
          "name": "SC Otelul Galati",
          "code": "OTE",
          "country": "Romania",
          "kitURL" : "https://ascotelul.ro/wp-content/uploads/2020/10/tricou-oficial22.jpg"
        }
      ]
    }
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    });
  }

  render() {
    const { clubs, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredClubs = clubs.filter((team) => {
      return team.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 id="app-title">Penalty Shootout</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder={"Search Kits"} className={"search-box"}/>
        <CardList clubs={filteredClubs} />
      </div>
    );
  }
}
*/
export default App;
