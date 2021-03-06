import classes from './English.module.css'
import image from '../../assets/img3.jpg'
import {useEffect} from "react";

const English = () => {
     useEffect(() => {
        document.getElementById('footer_id').style = 'display:flex';
    });

    return <div className={classes.container}>
        <img src={image} alt="images"/>
        <section>
            <h4>
                IELTS
            </h4>
            <ol>
                <li>
                    IELTS (International English Language Testing System) მსოფლიოში ერთერთი ყველაზე პოპულარული
                    ტესტია, რასაც ითხოვს მრავალი ქვეყნის უნივერსიტეტი, სხვადასხვა დაწესებულებები და აგრეთვე
                    საიმიგრაციო სამსახურები. გასულ წელს 2 მილიონზე მეტმა ადამიანმა ჩააბარა აღნიშნული ტესტი.

                </li>
                <li>
                    IELTS ის მოსამზადებელი კურსის დაწყების წინ თქვენ გაივლით სპეციალურ ტესტირებას და გასაუბრებას,
                    რაც დაადგენს თქვენი ცოდნის დონეს და ამ ცოდნის შესაბამისობას არჩეული საგამოცდო კურსისათვის.
                </li>
                <li>
                    IELTS - ის ტესტის ამოწმებს თქვენი კითხვის, მოსმენის, წერის და მეტყველების უნარებს.
                </li>
            </ol>
        </section>
        <section>
            <h4>
                TOEFL
            </h4>
            <ol>
                <li>
                    TOEFL- ეს ტესტი არის ერთ ერთი სთანდარტული ტესტი, რომელიც შემუშავებულია ETS ორგანიზაციის
                    (Education Testing Service) მიერ. ტესტი შედგება რამდენიმე ვარიანტულ არჩევანზე და ამიტომ
                    მიახლოვებით 4 - 4.5 საათის განმავლობაში გრძელდება.
                </li>
                <li>
                    საერთშორისო სერთიფიკატის მოქმედების ვადაა 2 წელი. ტესტი განკუთვნილია მათთვის, ვინც ა.შ.შ
                    უნივერსიტეტებში აბარებს, მაგისტრატურის პროგრამაზე.

                </li>
                <li>
                    ასევე ხშირად TOEFL სერთიფიკატს სამსახურში ითხოვენ, როგორც ინგლისური ენის ცოდნის ხარისხის
                    დამადასტურებელ საბუთს.

                </li>
                <li>
                    საგამოცდო რეგისტრაცია კი წინასწარ უნდა გაიაროთ საიტზე www.toefl.org
                </li>
                <li>
                    თუ თქვენ გადაწყვეტილი გაქვთ საერთაშორისო გამოცდების ჩაბარება ჩვენ დაგეხმარებით შესაბამისი
                    მოსამზადებელი კურსებით, რომლებიც ითვალისწინებს ყველა საგამოცდო მოთხოვნას
                </li>
            </ol>
        </section>
        <section>
            <h4>
                FCE
            </h4>
            <ol>
                <li>
                    FCE- ამ გამოცდისთვის მოსამზადებელი კურსი განსაზღვრულია Upper Intermediate დონის მსმენელზე, რაც
                    ევროპული სკოლების მიხედვით იგივეა რაც B2. FCE სერტიფიკატის მფლობელს თავისუფლად უნდა შეეძლოს
                    არაადაპტირებული ლიტერატურის კითხვა, ინგლისურენოვანი ფილმების ნახვა, ინგლისელებთან საქმიანი და
                    თავისუფალი ურთიერთობების დამყარება. ჩამოთვლილი სირთულეების გადალახვის შემთხვევაში დიდი
                    ბრიტანეთის გარკვეულ უნივერსიტეტებში გზა ხსნილია.
                </li>
                <li>
                    FCE გამოცდა 5 ნაწილისგან შედგება:
                </li>
            </ol>
        </section>
        <section>
            <h4>
                CAE
            </h4>
            <ol>
                <li>

                    CAE- საერთაშორისო სტანდარტის მიხედვით CAE შეესაბამება ევროპულ C1 დონეს.

                </li>
                <li>
                    ამ ეტაპზე თავისუფლად უნდა ვიგულისხმოთ ენის უმაღალესი ხარისხით ფლობა, რაც გამოიხატება ყოველდღიურ
                    სიტუაციებში, იქნება ეს ზეპირი თუ წერილობითი მიმართვები, პროფესიონალური საკითხების გადაწყვეტა და
                    ა.შ. CAE სერტიფიკატს მთელი მსოფლიოს მაშტაბით მნიშვნელოვანი შეფასება ეძლევა ნებისმიერი
                    კომპანიების და უნივერსიტეტების მიერ.
                </li>
                <li>
                    CAE სერთიფიკატის მისაღებად 4 ეტაპის გავლა გიხდებათ:
                </li>
            </ol>
        </section>
        <section>
            <h4>
                CPE
            </h4>
            <ol>
                <li>
                    CPE ეს არის კემბრიჯის საგამოცდო სერიიდან ბოლო, ყველაზე რთული გამოცდა ინგლისურ ენაში.

                </li>
                <li>
                    ევროპის საბჭოს თანახმად CPE სერთიფიკატი შეესაბამება C2 დონეს, მისი წარმატებულად ჩაბარების
                    შემთხვევაში კი თქვენი ინგლისური ენის ცოდნა სრული და ძირფესვიანია. რა თქმა უნდა CPE სერთიფიკატს
                    მსოფლიოს მაშტაბით უმაღლესი შეფასება ეძლევა, ნებისმიერი კომპანიებისა და უნივერსიტეტებისგან.
                </li>
            </ol>
        </section>
        <section>
            <h4>
                ზოგადი ინგლისური
            </h4>
            <ol>
                <li>
                    ზოგადი ინგლისური ენა სხვადასხვა ასაკობრივ პროგრამას მოიცავს – საბავშვო, თინეიჯერების და
                    მოზრდილთა პროგრამები. კურსი რეკომენდირებულია ნებისმიერი ასაკის მსურველთათვის: ვისაც სურს
                    დაეუფლოს ენას, გაიუმჯობესოს საუბრის, სმენის, კითხვის, ლექსიკის, გამოთქმის უნარჩვევები. ლექციებზე
                    გათვალისწინებულია კომუნიკაციისა და თავისუფლად მეტყველების მრავალი სასწავლო თემa, რაც საშუალებას
                    მოგცემთ იოლად გადალახოთ ენობრივი ბარიერი.


                </li>
                <li>
                    ჯგუფები კომპლექტდება ასაკისა და დონის მიხედვით. წინასწარი ტესტირების და გასაუბრების შედეგად
                    ჩაირიცხებით შესაბამისი დონის ჯგუფში. მეცადინეობა ტარდება კვირაში სამჯერ. ყოველი კურსი დასრულდება
                    ტესტირებით, რისი შედეგების მიხედვითაც მოხდება შემდეგ საფეხურზე გადასვლა და შესაბამისი
                    სერთიფიკატის მინიჭება. ჯგუფში დასაშვებია მაქსიმუმ 8 მოსწავლე.
                </li>
            </ol>
        </section>
        <section>
            <h4>
                ერთი ერთზე
            </h4>
            <ol>
                <li>
                    კურსი ეფუძნება პირად შემოთავაზებებს. ნებისმიერი დონის ასამაღლებლად, თქვენთვის საჭირო თემებს და
                    მიზნებს გაითვალისწინებენ მაღალკვალიფიცირებული პედაგოგები და დაგეხმარებიან უცხო ენასთან
                    დაკავშირებული ინდივიდუალური პრობლემების გადალახვაში. გვაქვს მარტივი სასაუბრო და სერიოზული
                    საკომუნიკაციო პროგრამები. გასაუბრების შემდეგ მსურველებს რეკომენდაციას ვაძლევთ რომელი პროგრამა და
                    რამდენი საფეხურის გავლა ესაჭიროებათ და შესაბამისად შეუდგებიან სასწავლო კურსის სწავლას.
                </li>
                <li>
                    ნებისმიერი კურსის მსმენელები დაინტერესებულნი არიან საუკეთესო და მუდმივადგანახლებული
                    სახელმძღვანელოებით, საჭირო აუდიო-ვიდეო მასალებით.

                </li>
                <li>
                    კურსებს საერთაშორისო სერთიფიკატის და უდიდესი გამოცდილების მქონე პედაგოგები ატარებენ.
                    კურსდამთავრებულებზე გაიცემა შესაბამისი დონის სერთიფიკატები.
                </li>
            </ol>
        </section>
        <section>
            <h4>
                საგამოცდო კურსები
            </h4>
            <ol>
                <li>
                    ჩვენ გვაქვს PET, FCE, CAE, CPE, IELTS, TOEFL გამოცდებისთის მოსამზადებელი კურსები
                </li>
                <li>
                    აღნიშნული სერთიფიკატების მფლობელები გათავისუფლებულები არიან მაგისტრატურის და დოქტორანტურის
                    ინგლისური ენის გამოცდებისგან
                </li>
                <li>
                    IELTS და TOEFL არის მსოფლიოში დაკანონებული ინგლისური ენის ტესტი,რომელსაც წელიწადში საშუალოდ 1,4
                    მილიონი მსურველი აბარებს.
                </li>
                <li>
                    IELTS (საერთაშორისო ინგლისური ენის ტესტი) სერთიფიკატი მოეთხოვებათ მათ ვისაც სურს სწავლის
                    გაგრძელება ევროპის, ბრიტანეთის, ავსტრალიის, ახალი ზელანდიის, ა.შ.შ და კანადის უნივერსიტეტებში.
                    ვრცელ ინფორმაციას გაეცანით www.ielts.org
                </li>
                <li>
                    თუ თქვენ გადაწყვეტილი გაქვთ საერთაშორისო გამოცდების ჩაბარება -ჩვენ დაგეხმარებით შესაბამისი
                    მოსამზადებელი კურსებით, რომლებიც ითვალისწინებს ყველა საგამოცდო მოთხოვნას!
                </li>
            </ol>
        </section>
        <section>
            <h4>
                აბიტურიენტი
            </h4>
            <ol>
                <li>
                    კურსი შექმნილია სპეციალურად მათთვის ვინც ემზადება ერთიანი ეროვნული გამოცდებისთვის. კურსის
                    მეშვეობით თქვენ შეძლებთ გაიუმჯობესოთ ინგლისური ენის ყველა უნარი დონის შესაბამისად: გრამატიკა,
                    წერა, კითხვა, საუბარი, მოსმენა, ლექსიკა და სწორი ინტონაციური წარმოთქმა. საინტერესო და მხიარული
                    გაკვეთილები, რომლებიც მიმდინარეობს მხოლოდ ინგლისურ ენაზე მოგცემთ საშუალებას , რომ აითვისოთ
                    ინგლისური სწრაფად.
                </li>
                <li>
                    იმუშავებთ სპეციალურად ერთიანი ეროვნული გამოცდებისთვის შექმნილი სატესტო ნიმუშებით
                </li>
                <li>
                    გასწავლით მაღალკვალიფიციური პედაგოგები, რომელთაც მრავალწლიანი გამოცდილება აქვთ აბიტურიენტების
                    მომზადებაში

                </li>
                <li>
                    განივითარებთ დამოუკიდებლად მუშაობის უნარს
                </li>
            </ol>
        </section>
        <section>
            <h4>
                ბიზნეს ინგლისური
            </h4>
            <ol>
                <li>
                    ეს კურსი საინტერესოა მსმენელთათვის, რომლებიც ემზადებიან ბიზნესის შესასწავლად მათთვის ვისაც აქვს
                    კონტაქტი ბიზნეს საქმიანობასთან. კურსი მოიცავს იმ თემატიკას და ენობრივ სტრუქტურას, რაც თქვენს
                    ბიზნეს საქმიანობაში გჭირდებათ. მეცადინეობის შედეგად გაგიიოლდებათ სალაპარაკო და წერილობითი
                    კონტაქტის დამყარება საერთაშორისო ორგანიზაციებთან, მოლაპარაკების წარმართვა უცხოელ ბიზნესმენებთან.
                    სასწავლო მასალები შერჩეულია სპეციალიზირებული ბიზნეს გამოცემებიდან და სხვა ორიგინალური
                    წყაროებიდან.
                </li>
                <li>
                    გაკვეთილზე დამატებით მასალად გათვალისწინებულია თავისუფლად მეტყველების სასწავლო თემები:
                    შეხვედრები, პრეზენტაციები, საქმიანი მოლაპარაკებები,საერთაშორისო სავაჭრო ურთიერთობები,
                    მენეჯმენტის ნაირსახეობები, საერთაშორისო ეკონომიკა, სხვადასხვა მსოფლიო ახალი ამბები ა.შ.
                </li>
                <li>
                    მეცადინეობა ტარტება ჯგუფურად, კვირაში სამჯერ. შესაძლებელია ინტენსიური კურსის გავლაც.
                </li>
            </ol>
        </section>
        <section>
            <h5>
                ზოგადი კურსი მოზრდილთათვის
            </h5>
            <ol>
                <li>
                    ჩვენი მასწავლებლები გამოიყენებენ სწავლების საკომუნიკაციო მეთოდის მრავალფეროვან საშუალებებს რათა
                    სტუდენტები სრულად ჩაერთონ ისეთ მიზანმიმართულ კომუნიკაციურ აქტივობებში, როგორიცაა განხილვა,
                    დისკუსია, როლური თამაშები, ინდივიდუალური თუ ჯგუფური სავარჯიშოები.
                </li>
                <li>
                    სტუდენტები სხვადასხვა სოციალური გარემოდან არიან და შესაბამისად მათი სწავლის მიზნებიც
                    განსხვავებულია. ტარდება სტუდენტებთან ინდივიდუალური შეხვედრები (Tutorials) და მათი მიზნების
                    დაზუსტება და იმ სავარაუდო სიტუაციების შესწავლა, რასაც უნდა მოერგოს სათანადო სწავლების
                    მიმართულებები. ენობრივი საჭიროებების შესწავლა და სათანადო მიმართულებების დაგეგმვა.
                    ტესტირებისა და შეფასების ეფექტური სისტემა, სტუდენტთა მიღწევების რეგულარული განხილვა, საჭირო
                    რჩევების მიცემა – წარმატებული სწავლების საწინდარია.
                </li>
            </ol>
        </section>
        <section>
            <h5>
                ბავშვებისთვის და მოზარდებისათვის (7-17 წელი)
            </h5>
            <ol>
                <li>
                    ბავშვებისა და მოზარდების სასწავლო კურსი მოიცავს 3 ჯგუფს:
                    10882344_10153055134618974_51772508302233623_n
                    ბავშვები 7-9 წლამდე
                    მოზარდები 10-13 წლამდე
                    მოზარდები 14-17 წლამდე
                </li>
                <li>
                    7-9 წლის ბავშვებისთვის გთავაზობთ სწავლების 6 საფეხურს: -K1დან – K6 მდე, რაც შეესაბამება საერთო
                    ევროპული სასწავლო დონის A2 საფეხურს.

                </li>
                <li>
                    10-13 წლის მოზარდებისთვის “საერთაშორისო სახლი” გთავაზობთ 4 სასწავლო დონეს, PT1-დან, რაც
                    Elementary (ელემენტარულ) დონეს უდრის, PT4 – მდე, რაც შეესაბამება B1 ანუ Intermediate (საშუალო)
                    დონეს, რის დამთავრების შემდგომ მოზარდები სწავლას აგრძელებენ 14-17 წლის მოზარდთა კურსზე.
                </li>
                <li>
                    14-17 წლის მოზარდებისთვის “საერთაშორისო სახლი” გთავაზობთ 8 სასწავლო საფეხურს, T1 დან T8 ჩათვლით,
                    რაც საერთო ევროპული სასწავლო დონის C1 შეესაბამება.
                </li>
            </ol>
        </section>
        <section>
            <h4>
                ჩარიცხვა
            </h4>
            <ol>
                <li>
                    ტესტირებისა და გასაუბრების საფუძველზე ჩაირიცხებით შესაბამისი დონის ჯგუფში, სადაც ინგლისურ ენას
                    თქვენსავით ფლობენ. აირჩევთ თქვენთვის სასურველ დღეებს – ორშაბათი, ოთხშაბათი, პარასკევი ან
                    სამშაბათი, ხუთშაბათი, შაბათი და შესაბამისად მეცადინეობის დაწყების საათს: 10.00, 12.00, 15.00,
                    15.30, 16.30, 17.00 ან 19.00. მეცადინეობები კვირაში 2–ჯერ ან 3–ჯერ, 2 საათის განმავლობაში. ხოლო
                    ბავშვებისა და მოზარდების გაკვეთილების ხანგრძლივობაა 1,5 საათი.
                    საერთაშორისო სახლის მისაღები ტესტი:
                </li>
            </ol>
        </section>
    </div>
}
export default English;