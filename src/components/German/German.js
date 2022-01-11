import classes from '../About/About.module.css';
import image from '../../assets/img3.jpg'
import {useEffect} from "react";

const German = () => {
     useEffect(() => {
        document.getElementById('footer_id').style = 'display:flex';
    });

    return <div className={classes.background}>
        <div className={classes.container}>
            <img src={image} alt="images"/>
            <h1>გერმანული</h1>
            <br/>
            <div>
                გიწვევთ გერმანული ენის შემსწავლელ კურსებზე: მოსწავლეებს,აბიტურიენტებს,მაგისტრატურაში გამოცდების
                ჩაბარების
                მსურველებს.კურსს უძღვებიან გამოცდილი და მაღალკვალიფიციური პედაგოგები.კურსი განკუთვნილია ნებისმიერი
                ასაკის
                მსურველთათვის.სწავლა მიმდინარეობს დონეების მიხედვით.

            </div>
            <br/>
            <ul>
                <li> საწყისი დონე (Grundstufe): განკუთვნილია მათთვის ვინც თავიდან იწყებს გერმანულის სწავლას.ამ დონეზე
                    უმოკლეს დროში შეიძენთ ზეპირი და წერითი მეტყველების შაბაზისო უნარებს, გაიმდიდრებთ ლექსიკას,ისაუბრებთ
                    მარტივ სასაუბრო თემებზე.
                </li>
                <br/>
                <li>საშუალო დონე (Mithelstufe): ენის სწავლების ძირითადი საფეხურია.გაიმდიდრებთ ლექსიკას, დაეუფლებით
                    გრამატიკის დიდ ნაწილს, თავისუფლად ისაუბრებთ ნებისმიერ თემებზე, შეძლებთ სხვადასხვა სირთულის
                    ლიტერატურის
                    და სტატიების წაკითხვასა და აღქმას.
                </li>
                <br/>
                <li>პროფესიული დონე (oberstufe): სამეტყველო ენის დახვეწა, შეისწავლება პროფესიონალურ დონეზე გერმანულად
                    საუბარი, ნებისმიერი დიალოგისა და ტექსტის თარგმნა, შეძლებთ სწრაფად საუბარს.
                </li>
            </ul>
        </div>
    </div>
}
export default German;