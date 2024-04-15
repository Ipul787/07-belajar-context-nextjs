import Heading from "./heading";
import Section2 from "./section2";
Heading

export default function Post({ title, body }: { title:string, body:string }){
    return (
        <Section2 isFancy={true}>
            <h4>Name: Saefulloh Fatah Putra Kyranna</h4>
            <h4>NIM: 2141720067</h4>
            <br></br>
            <Heading>
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section2>
    );
}