import React from 'react';
import { Helmet } from 'react-helmet-async'; 
import './About.css';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Haqqımızda - Dual Mebel</title>
      </Helmet>
      
      <div className="about-container">
        <h1>Biz Kimik?</h1>
        <p>Dual Mebel, keyfiyyətli və şık mebel məhsulları ilə müştərilərinin evlərini və iş yerlərini daha rahat və estetik bir məkana çevirməyi hədəfləyir. 10 ildən artıq təcrübəyə sahib olan komandamız, müasir dizaynlar və yüksək keyfiyyətlə müştərilərinə xidmət edir.</p>
        
        <h2>Vizyonumuz</h2>
        <p>Bizim vizyonumuz, müştərilərimizin ehtiyaclarına ən yaxşı şəkildə cavab verən, dayanıqlı və estetik baxımdan mükəmməl mebel istehsal etməkdir. Hər bir məhsulumuz, müştərilərimizin həyatını daha keyfiyyətli etmək üçün nəzərdə tutulmuşdur.</p>

        <h2>Missiyamız</h2>
        <p>Bizim missiyamız müştərilərimizin məmnuniyyətini təmin edərək, onların evlərini və iş yerlərini müasir və funksional mebellərlə bəzəməkdir. Biz keyfiyyəti, dizaynı və müştəri xidmətini ön planda tutaraq bu sahədə lider olmağı hədəfləyirik.</p>

        <h2>Məhsullarımız</h2>
        <p>Dual Mebel olaraq, müxtəlif növ mebellərlə müştərilərimizin ehtiyaclarını qarşılayırıq. Bizim təklif etdiyimiz bəzi əsas mebel növləri bunlardır:</p>
        <ul>
          <li><strong>Sofalar</strong> - Müxtəlif ölçülərdə və dizaynlarda rahat və şık sofalar</li>
          <li><strong>Yemək Masaları və Stullar</strong> - Müasir və funksional yemək masaları, şık stullarla</li>
          <li><strong>Kitab Rafları</strong> - Minimalist və müasir dizaynlı kitab rafları</li>
          <li><strong>Yataklar və Yatak Çərçivələri</strong> - Yüksək keyfiyyətli, rahat yataklar</li>
          <li><strong>Ofis Mebelləri</strong> - İstifadəçi dostu, funksional ofis mebelləri</li>
        </ul>

        <h2>İstifadə Olunan Materiallar</h2>
        <p>Dual Mebel olaraq, hər bir məhsulumuzda yalnız ən yüksək keyfiyyətli materiallardan istifadə edirik. Bizim istifadə etdiyimiz əsas materiallar aşağıdakılardır:</p>
        <ul>
          <li><strong>Taxta:</strong> Təbiətə dost, uzun müddət davamlı olan taxta materiallar. Xüsusilə, qoz ağacı, palıd və şam ağaclarından istifadə edirik.</li>
          <li><strong>Metal:</strong> Mebelimizin strukturunda dayanıqlı və estetik metal komponentlərdən istifadə edilir. Paslanmaz polad və alüminium materiallar, möhkəm və şık görünüş təmin edir.</li>
          <li><strong>Şüşə:</strong> Modern və açıq sahələr üçün şüşə istifadə edirik. Şüşə masalar və vitrinlər müasir dizaynın ayrılmaz hissəsidir.</li>
          <li><strong>Dəri və Kumaş:</strong> Sofaların və kresloların üzlüyü üçün yüksək keyfiyyətli dərilər və premium kumaşlar istifadə olunur. Müxtəlif rəng və toxuma seçimləri mövcuddur.</li>
          <li><strong>Kompozit Materiallar:</strong> Bəzi məhsullarımızda dayanıklı və estetik kompozit materiallardan istifadə edirik ki, həm yüngül, həm də davamlı olsun.</li>
        </ul>

        <h2>Əlaqə</h2>
        <p>Bizimlə əlaqə saxlamaq üçün <a href="/contact">əlaqə səhifəmizə</a> keçid edə bilərsiniz.</p>
      </div>
    </>
  );
};

export default About;