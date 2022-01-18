import { useState } from "react";
import { IonContent, IonPage, IonToast } from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
	const [showToast1, setShowToast1] = useState(false);

	return (
		<IonPage id="home-page">
			<IonContent fullscreen>
				<div className="popup-wrapper ">
					<button className="popup" onClick={() => setShowToast1(true)}>
						<p> Show Toast 1</p>
					</button>
				</div>
				<IonToast
					isOpen={showToast1}
					onDidDismiss={() => setShowToast1(false)}
					message="Your settings have been saved."
					duration={200}
				/>
			</IonContent>
		</IonPage>
	);
};

export default Home;
