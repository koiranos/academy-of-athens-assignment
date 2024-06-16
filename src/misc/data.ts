export interface pageContentInterface {
  home: {
    welcome: {
      title: string;
      text: string;
    };
    research: {
      title: string;
      text: string;
      buttonText: string;
      centers: {
        title: string;
        url: string;
      }[];
    };
    news: {
      title: string;
      categories: {
        label: string;
        value: string;
      }[];
      items: {
        events: {
          tag: string;
          title: string;
          date: string;
          summary: string;
          image: string;
        }[];
        lectures: {
          tag: string;
          title: string;
          date: string;
          summary: string;
          image: string;
        }[];
        announcements: {
          tag: string;
          title: string;
          date: string;
          summary: string;
          image: string;
        }[];
      };
      readMoreButtonText: string;
    };
    more: {
      title: string;
      items: {
        title: string;
        buttonText: string;
        image: string;
        url: string;
      }[];
    };
    editions: {
      title: string;
      text: string;
      books: {
        title: string;
        url: string;
        image: string;
      }[];
    };
  };
  publications: {
    print: {
      title: string;
    };
  };
  footer: {
    contact: {
      title: string;
      address: string;
      phone: string;
      fax: string;
      email: string;
    };
    info: {
      title: string;
      list: {
        title: string;
        url: string;
      }[];
    };
    reserved: string;
  };
}

export const pageContent: pageContentInterface = {
  home: {
    welcome: {
      title: "Καλώς ήρθατε στη δικτυακή πύλη της Ακαδημίας Αθηνών",
      text: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία ομαλή κατανομή γραμμάτων, αντίθετα με το να βάλει κανείς κείμενο.",
    },
    research: {
      title: "Ερευνητικά Κέντρα",
      text: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία ομαλή κατανομή γραμμάτων.",
      buttonText: "Περισσότερα",
      centers: [
        {
          title: "Κέντρον Ερεύνης της Αρχαιότητος",
          url: "#",
        },
        {
          title: "Κέντρο Ερεύνης Φυσικής της Ατμόσφαιρας και Κλιματολογίας",
          url: "#",
        },
        {
          title: "Κέντρον Ερεύνης της Ελληνικής Λαογραφίας",
          url: "#",
        },
        {
          title: "Κέντρον Ερεύνης Νεοελληνικών Διαλέκτων και Ιδιωμάτων Ι.Λ.Ν.Ε",
          url: "#",
        },
      ],
    },
    news: {
      title: "Τα Νέα μας",
      categories: [
        { label: "Εκδηλώσεις", value: "events" },
        { label: "Διαλέξεις", value: "lectures" },
        { label: "Ανακοινώσεις", value: "announcements" },
      ],
      items: {
        events: [
          {
            tag: "Ακαδημία Αθηνών",
            title:
              "Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου της 28ης Οκτωβρίου 1940...",
            date: "23 Οκτωβρίου 2023",
            summary:
              "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...",
            image:
              "https://s3-alpha-sig.figma.com/img/3983/3d1b/eaea17cc498c2bcbfb3c42f648ea3645?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCfYdzINc94p-74yBaNGvLrRBf2rJNmOj7XLg0-qav9TZ6Zw4bi8aAzS7plKZpHAUedvUA3UtdfNU4MUG5lDAnuDTA4wdNKqKb09HHxiLHJ4l~oPscsjviDsW5NUbuxOlm-5JtN7ChYuJJBPwZhkqVEU2kRJJguS~Mf5Sj5~vMC3W2uA4rB4RNxDGpES-sIhS8lYQFge8Bi7M72y7arr6uBdelZfbmqzVoCk2lc7regofC9k6yKvj92TTYrvmQFN~PwlcWVSoeKemQSukp~6CrEgGaNlauSyI83KMXT66NlfyihK3GPPsQaImYfMh~n2H2fzQciquUQUnslpFxnZTQ__",
          },
          {
            tag: "Κέντρον Ερεύνης της Ελληνικής Λαογραφίας",
            title:
              "Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου της 28ης Οκτωβρίου 1940, Πέμπτη 26 Οκτωβρίου 2023 και ώρα 19.00",
            date: "23 Οκτωβρίου 2023",
            summary:
              "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...",
            image:
              "https://s3-alpha-sig.figma.com/img/9f2a/fc4b/2d3dd5d29341b759d45c8342aa892403?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U5yJ1Xq0Sl7giAtNO03p8JXHv7XCfixty-lZiVsvBCbXGxOnCiCw04GYQkFZk~CvX70qdmLHKXvuCALhzsguNsiysDp5GREXLX9~~DX3PW2im9mCzX1RYcBg9uXCXmVHewQvb3BRiRQ-E5wC3qVZXcb3kH74h8SohR0xI4scpJ7pcsUWxSBPHXexDAtFizUPgUuq2PhupxYpt0Q29GDWzMr6wmMsdie3sO1qanlVXPw1HbpUezWSCQNSmpAnBqhVHDmBsZ4jJgQB6ARssGUksgtm1hOouS45f7-f3pjYcQYB3j-ZarjkP7FTNY6sbqVrl4BZqm9Z5Fo8FxQ3MuufHw__",
          },
          {
            tag: "Κέντρον Ερεύνης της Ελληνικής Λαογραφίας",
            title:
              "Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου της 28ης Οκτωβρίου 1940...",
            date: "23 Οκτωβρίου 2023",
            summary:
              "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...",
            image:
              "https://s3-alpha-sig.figma.com/img/7820/f15f/4f354329de8ad41549f4d4fb649a0f02?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QC4pBTTD~fOI30jGO1zkbevBpjk5B6GLbNR5sUpXUKJIexSuveVBmivKboVzh8OhSoaBx496DgJm8FBRx9M8Y1QxIiIEgN-3BDQfxa55zgn8lolJfiZfSKdN6EM7F3QBfasG8eHF1ombRFXqqQKFrdSrVkpHVELFARSGGOhmcCmMf2zapSGh7cJ52ZVPqZR8pfSnN1lfRLW4LLIdGO115tUqKgl36QueUv4WgLDj4W0O7zRBZYTPPk~8XtXlDF0dS6JMebNWZYRoFp8pM54GLxuAqgyWDcP0ih5VRiBiT0YfNtQDvu27ESuLL6mfXPHO7YFvyJzwOKbGflvZgUXakQ__",
          },
          {
            tag: "Κέντρον Ερεύνης της Ελληνικής Φιλοσοφίας",
            title: "Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου",
            date: "23 Οκτωβρίου 2023",
            summary:
              "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...",
            image:
              "https://s3-alpha-sig.figma.com/img/d8c0/5123/cb94633149b6a4ffaf91d68921482bfb?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iglD42em8H7MjF0K45x4eQsPCzsmVcEtgvwP1xU58YdX9PeE-pD38Vmms9zab-uZGCbQCwPzbb0xcwQM8xtHl3fBWZWaIC4t610kG4nukOJosbIaHThzdEGVUsxx65SCFU9S17GmypQVKh3tExf7384fGRhW2lJg1ztfm2Js7BUIC5NWAJCW-rMXuF1WPo3gGg54F79f0T8i58D9GwGjlfIERTNtN8QikwHdKH27ysfk3HL2Bt0-NXvK1Nx-1OCuO-i8M7nYOm4VV2Y~qshF1qvYvy1VuHVFu-kEE3ADpP3eG5cYGtRCg6WDZvr85wLynXGZip8EcRVTlbkOefy4HA__",
          },
        ],
        lectures: [
          {
            tag: "Κέντρον Ερεύνης της Ελληνικής Λαογραφίας",
            title:
              "Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου της 28ης Οκτωβρίου 1940, Πέμπτη 26 Οκτωβρίου 2023 και ώρα 19.00",
            date: "23 Οκτωβρίου 2023",
            summary:
              "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...",
            image:
              "https://s3-alpha-sig.figma.com/img/9f2a/fc4b/2d3dd5d29341b759d45c8342aa892403?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U5yJ1Xq0Sl7giAtNO03p8JXHv7XCfixty-lZiVsvBCbXGxOnCiCw04GYQkFZk~CvX70qdmLHKXvuCALhzsguNsiysDp5GREXLX9~~DX3PW2im9mCzX1RYcBg9uXCXmVHewQvb3BRiRQ-E5wC3qVZXcb3kH74h8SohR0xI4scpJ7pcsUWxSBPHXexDAtFizUPgUuq2PhupxYpt0Q29GDWzMr6wmMsdie3sO1qanlVXPw1HbpUezWSCQNSmpAnBqhVHDmBsZ4jJgQB6ARssGUksgtm1hOouS45f7-f3pjYcQYB3j-ZarjkP7FTNY6sbqVrl4BZqm9Z5Fo8FxQ3MuufHw__",
          },
          {
            tag: "Κέντρον Ερεύνης της Ελληνικής Λαογραφίας",
            title:
              "Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου της 28ης Οκτωβρίου 1940...",
            date: "23 Οκτωβρίου 2023",
            summary:
              "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...",
            image:
              "https://s3-alpha-sig.figma.com/img/7820/f15f/4f354329de8ad41549f4d4fb649a0f02?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QC4pBTTD~fOI30jGO1zkbevBpjk5B6GLbNR5sUpXUKJIexSuveVBmivKboVzh8OhSoaBx496DgJm8FBRx9M8Y1QxIiIEgN-3BDQfxa55zgn8lolJfiZfSKdN6EM7F3QBfasG8eHF1ombRFXqqQKFrdSrVkpHVELFARSGGOhmcCmMf2zapSGh7cJ52ZVPqZR8pfSnN1lfRLW4LLIdGO115tUqKgl36QueUv4WgLDj4W0O7zRBZYTPPk~8XtXlDF0dS6JMebNWZYRoFp8pM54GLxuAqgyWDcP0ih5VRiBiT0YfNtQDvu27ESuLL6mfXPHO7YFvyJzwOKbGflvZgUXakQ__",
          },
          {
            tag: "Κέντρον Ερεύνης της Ελληνικής Φιλοσοφίας",
            title: "Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου",
            date: "23 Οκτωβρίου 2023",
            summary:
              "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...",
            image:
              "https://s3-alpha-sig.figma.com/img/d8c0/5123/cb94633149b6a4ffaf91d68921482bfb?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iglD42em8H7MjF0K45x4eQsPCzsmVcEtgvwP1xU58YdX9PeE-pD38Vmms9zab-uZGCbQCwPzbb0xcwQM8xtHl3fBWZWaIC4t610kG4nukOJosbIaHThzdEGVUsxx65SCFU9S17GmypQVKh3tExf7384fGRhW2lJg1ztfm2Js7BUIC5NWAJCW-rMXuF1WPo3gGg54F79f0T8i58D9GwGjlfIERTNtN8QikwHdKH27ysfk3HL2Bt0-NXvK1Nx-1OCuO-i8M7nYOm4VV2Y~qshF1qvYvy1VuHVFu-kEE3ADpP3eG5cYGtRCg6WDZvr85wLynXGZip8EcRVTlbkOefy4HA__",
          },
          {
            tag: "Ακαδημία Αθηνών",
            title:
              "Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου της 28ης Οκτωβρίου 1940...",
            date: "23 Οκτωβρίου 2023",
            summary:
              "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...",
            image:
              "https://s3-alpha-sig.figma.com/img/3983/3d1b/eaea17cc498c2bcbfb3c42f648ea3645?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCfYdzINc94p-74yBaNGvLrRBf2rJNmOj7XLg0-qav9TZ6Zw4bi8aAzS7plKZpHAUedvUA3UtdfNU4MUG5lDAnuDTA4wdNKqKb09HHxiLHJ4l~oPscsjviDsW5NUbuxOlm-5JtN7ChYuJJBPwZhkqVEU2kRJJguS~Mf5Sj5~vMC3W2uA4rB4RNxDGpES-sIhS8lYQFge8Bi7M72y7arr6uBdelZfbmqzVoCk2lc7regofC9k6yKvj92TTYrvmQFN~PwlcWVSoeKemQSukp~6CrEgGaNlauSyI83KMXT66NlfyihK3GPPsQaImYfMh~n2H2fzQciquUQUnslpFxnZTQ__",
          },
        ],
        announcements: [],
      },
      readMoreButtonText: "Διαβάστε περισσότερα",
    },
    more: {
      title: "Δείτε επίσης",
      items: [
        {
          title: "Ακαδημία Αθηνών",
          buttonText: "Πλοηγηθείτε",
          image:
            "https://s3-alpha-sig.figma.com/img/b21c/de22/db75266f44d113898093b196d8625b7f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FB6csERiRUDp93hoGEOJRIqBwPBeKkBo23Tb6769hhPY9X9xvXwQT6ztWIU7zA-Le1zZ4vHEHb~rj4-0Os8fercMEosrLFfXma8LWp6Ie0akFJZt8U5wQw1RojqHTcsPG5GN4SBDY8lbDRNUoRSivuulteIeBpp~7Foy~67Jr9mPw4~oyxqAHjytZaUybg4NY1Ov64bWkZ4niEoigCmYxZ40HY57QEgbrCj7hk3bY~SH31xEWTc~mslJJnZxrVw~-uVudlqcKoBSQFtHUZLvW06Px0EiycqxFKROnV~YLkIv23a8vpn8TqLhLtYyJzDWpkxB0Q2XFYxdc03108VwJQ__",
          url: "#",
        },
        {
          title: "Αποθετήριο Ακαδημίας",
          buttonText: "Εξερευνήστε",
          image:
            "https://s3-alpha-sig.figma.com/img/1c88/fa67/123ec7b0dd88e64c339c3f1bbac335df?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oW6tzGNFKRiNICopSnl3LDJsCSjOkFQhRlPEoSaPomhxK6ag9ZCjeDIpzDZaSQ9mpJv13Zp-5yYcbru0JQm3uUrpyAuvzm~TX6hW3lURAS2WeLdKoon4KM3vnnSb3va6BLBtde8KdUiTHxsgqtPUJfQ9llpd6mLkQNopf~C3Di5dOvfFkVbHcufHQr1C2UFJ8pUt6JFjNtgaDBiOe74Ovm09CMZgkXkstqIwnklNEaxzJQqM01JDQf~36EIin0ZsAFtuHp61510dmMWH6aPAHnI-vcc-iuJRuORAINuUdNQ5h4SOTkcLMlzLs6dln0~SjhO-vlnX2WjyVsQmV73sHw__",
          url: "#",
        },
        {
          title: "Κεντρική Βιβλιοθήκη",
          buttonText: "Πλοηγηθείτε",
          image:
            "https://s3-alpha-sig.figma.com/img/def0/9740/964766a0415a7da619b856944c266571?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CKAun4181-L9ByD9JgPtp9A5H9xdRwzLlz42O~Zf46SaxabSUNRZ8Mfo-qr9lpzdPwgxBX~2FDsmSE6S11QApkvJkxbeVKlOJdqB5o~NPR1nt4TDDpA4Itfin3qkpK5qPh7L0PrbE7IxNMjnIqGOrpM8nOOmu4zsaedzStAdhbAgBYOL69AZwAeUF4fAK-T82tIULv14KdMqJeq0aQdVViDiMr0H4ZqwxohnuzsmfOF2AIxtFwTvozkGa~Qf3omo67H853xuGiD1LppBbM1KZIQQOBzoYWg1TwONNP-BuL6ZEnK4R9IuRE6-A~SwppnxTA0Sw4d5B9sPZH83Saz7Bg__",
          url: "#",
        },
      ],
    },
    editions: {
      title: "Εκδόσεις",
      text: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας",
      books: [
        {
          title: "Χρηστικό λεξικότης Νεοελληνικής Γλώσσας",
          url: "#",
          image:
            "https://s3-alpha-sig.figma.com/img/f719/212a/9d74e7c4b890b0c1c49c1756f2361a4e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OLf6e4dsi0gKVmHeoa1ZxwBcO2RMFzlrzCWJD-YM9Pd67DqgnivYPXms0gJRj-NnT2Xv1UDMIm-zM5StqyhlMbc39m--2Nk3xwRZY8X9KLDk4Luh6gsZBmFBw4o7YXCEIxEnSy6-S~UXR3TcIVO-3JDR~~hxJlm5kjJPtOb2ujCu~y0RnEUqZ4N1~uZv5jHh1KyJvX1rueJP2WZRy3634B00QI3Vp~j8Pbo3zchqiSuF8SlyPWNhUJddi6ptTCbqpG2h2KYkNGG4~uDhdTrcv75LLNJs866EqQVtT0xEvQx9ENF1uu15qkg-Z7mzMeYK3CUx5SRlWmLBH00AsJxBBA__",
        },
        {
          title: "Κώδικας Ηθικής και Επαγγελματικής Συμπεριφοράς Υπαλλήλ..",
          url: "#",
          image:
            "https://s3-alpha-sig.figma.com/img/8c4a/6761/e681b565e3ed85345344563706507e08?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sp4S4aM0lIac2ialmFSwTPxZUrfysLC2xVYufNIdgqfSDEdTDkFInAXYjU-wai2-TuyCkoxo-vTq0OCXvwRDUnlzKpXEjAGmahTB0m7c23~8Ks8a~9bSIAAWNPnfJO0Xn2qPAlGL8iImEV6GyBXwOomUQ5lmtIOiaZUR9VTvUPkbmHR84SZnV5frE74yTdxFFthB38gsAH~1OVZYkpuFnIB8ml41rb7LW8Sd5Nm~qoPSQOjkob91F6EVyCkpGr3yUraw5UyMDKF-hvhqC20uF7H0Bwv1aQ3gBabmfYRs4evsUvv4kqJTMqupNJ0Ki4FAJZ15UovzC1nmRwyRVjmBCg__",
        },
        {
          title: "Εκδόσεις Κέντρον Ερεύνης της Ελληνικής Λαογραφίας",
          url: "#",
          image:
            "https://s3-alpha-sig.figma.com/img/f719/212a/9d74e7c4b890b0c1c49c1756f2361a4e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OLf6e4dsi0gKVmHeoa1ZxwBcO2RMFzlrzCWJD-YM9Pd67DqgnivYPXms0gJRj-NnT2Xv1UDMIm-zM5StqyhlMbc39m--2Nk3xwRZY8X9KLDk4Luh6gsZBmFBw4o7YXCEIxEnSy6-S~UXR3TcIVO-3JDR~~hxJlm5kjJPtOb2ujCu~y0RnEUqZ4N1~uZv5jHh1KyJvX1rueJP2WZRy3634B00QI3Vp~j8Pbo3zchqiSuF8SlyPWNhUJddi6ptTCbqpG2h2KYkNGG4~uDhdTrcv75LLNJs866EqQVtT0xEvQx9ENF1uu15qkg-Z7mzMeYK3CUx5SRlWmLBH00AsJxBBA__",
        },
        {
          title:
            "Εκδόσεις Κέντρον Ερεύνης Νεοελληνικών Διαλέκτων και Ιδιωμάτων Ι.Λ.Ν.Ε",
          url: "#",
          image:
            "https://s3-alpha-sig.figma.com/img/f719/212a/9d74e7c4b890b0c1c49c1756f2361a4e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OLf6e4dsi0gKVmHeoa1ZxwBcO2RMFzlrzCWJD-YM9Pd67DqgnivYPXms0gJRj-NnT2Xv1UDMIm-zM5StqyhlMbc39m--2Nk3xwRZY8X9KLDk4Luh6gsZBmFBw4o7YXCEIxEnSy6-S~UXR3TcIVO-3JDR~~hxJlm5kjJPtOb2ujCu~y0RnEUqZ4N1~uZv5jHh1KyJvX1rueJP2WZRy3634B00QI3Vp~j8Pbo3zchqiSuF8SlyPWNhUJddi6ptTCbqpG2h2KYkNGG4~uDhdTrcv75LLNJs866EqQVtT0xEvQx9ENF1uu15qkg-Z7mzMeYK3CUx5SRlWmLBH00AsJxBBA__",
        },
      ],
    },
  },
  publications: {
    print: {
      title: "Έντυπα Δημοσιεύματα της Ακαδημίας Αθηνών",
    },
  },
  footer: {
    contact: {
      title: "ΕΠΙΚΟΙΝΟΝΙΑ",
      address: "Πανεπιστημίου 28, 106 79 Αθήνα",
      phone: "Τ: 210 3634700",
      fax: "F: 210 3634806",
      email: "info@academyofathens.gr",
    },
    info: {
      title: "ΧΡΗΣΙΜΕΣ ΠΛΗΡΟΦΟΡΙΕΣ",
      list: [
        {
          title: "Ευρετήριο Προσώπων",
          url: "/",
        },
        {
          title: "Πρόσβαση",
          url: "/",
        },
        {
          title: "Δικαιώματα",
          url: "/",
        },
        {
          title: "Δελτία Τύπου",
          url: "/",
        },
        {
          title: "Προκηρύξεις",
          url: "/",
        },
      ],
    },
    reserved: "© 2023 Dotsoft. All Rights Reserved.",
  },
};
