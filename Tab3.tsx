import React from 'react';
import { IonContent, IonPage,IonItem,IonAvatar,IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
 
const bands = [
	{ link: 'https://www.ilosaarirock.fi/2020/ohjelma/img/ilosaarirock-2020-amorphis.jpg',
      name: 'Amorphis'},
	{ link: 'https://www.ilosaarirock.fi/2020/ohjelma/img/ilosaarirock-2020-antti-tuisku.jpg',
      name: 'Antti Tuisku'},
	{ link: 'https://www.ilosaarirock.fi/2020/ohjelma/img/ilosaarirock-2020-battle-beast.jpg',
      name: 'Battle Beast'},
	{ link: 'https://www.ilosaarirock.fi/2020/ohjelma/img/ilosaarirock-2020-ellinoora.jpg', 
      name: 'ElliNoora'},
	{ link :'https://www.ilosaarirock.fi/2020/ohjelma/img/ilosaarirock-2020-ruusut.jpg',
      name: 'ruusut'},
	{ link: 'https://www.ilosaarirock.fi/2020/ohjelma/img/ilosaarirock-2020-pyhimys.jpg',
      name: 'pyhimys'}
] 

const Tab3: React.FC = () => {
  return (
	<IonPage>
		<IonContent>
		{/* Joensuu rocks! Ilosaari rocks! */}  
			{bands.map( band => <IonItem href ="https://www.ilosaarirock.fi/2020/ohjelma/"><IonAvatar slot="start"> <img src= 
			{band.link} /></IonAvatar><IonLabel> {band.name} </IonLabel></IonItem>)}
		</IonContent>
    </IonPage>
  );
};

export default Tab3;
