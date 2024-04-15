import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
Post

export default function RecentPost(){
    return (
        <Section2 isFancy={true}>
        <Heading>Posting Terbaru</Heading>
        <Post 
            title="Cita Rasa Lisbon"
            body="...those pastéis de nata"
        />
        <Post 
            title="Buenos Aires dalam irama tango"
            body="Saya menyukainya!"
        />
        </Section2>
    );
}