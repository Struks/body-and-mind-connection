import { Box, Typography, Collapse, Button } from "@mui/material";
import { useState } from "react";

const AppAboutTextMobile = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <Box
      sx={{
        opacity: ".8",
        "& *": { opacity: "1" },
        marginTop: 3,
        backgroundColor: "quotesPink.main",
        borderRadius: 2,
        padding: 2,
        textAlign: "justify",
      }}
    >
      <Typography
        variant="body1"
        pl={{ xs: 0, md: 3 }}
        pr={{ xs: 0, md: 3 }}
        pt={{ xs: 0, md: 3 }}
        fontWeight={500}
        color="primary.main"
        sx={{
          width: { xs: "100%", md: "85%" },
          marginLeft: { xs: "0", md: "auto" },
          backgroundColor: { xs: "none", md: "quotesPink.main" },
          borderTopRightRadius: "12px",
        }}
      >
        Ćao, ja sam Lidija – radoznala, kreativna i uvijek u potrazi za novim
        idejama i izazovima. Volim kada stvari imaju smisla i uživam u procesu
        stvaranja, povezivanja sa ljudima i istraživanja svega što me inspiriše.
      </Typography>

      <Collapse in={showMore} timeout="auto" unmountOnExit>
        <Typography
          variant="body1"
          pl={{ xs: 0, md: 3 }}
          pr={{ xs: 0, md: 3 }}
          fontWeight={500}
          pt={2}
          color="primary.main"
          sx={{
            width: { xs: "100%", md: "85%" },
            marginLeft: { xs: "0", md: "auto" },
            backgroundColor: { xs: "none", md: "quotesPink.main" },
          }}
        >
          {/* Ostatak teksta */}
          Integrativna tjelesna psihoterapija mi je otvorila novi svijet
          razumijevanja uma i tijela, a učenje i lični razvoj su mi stalna
          potreba. Fascinira me način na koji se svijet u nama i oko nas
          neprestano mijenja, kako tijelo pamti, kako emocije putuju, kako se
          sve na kraju nekako složi na svoje mjesto.
        </Typography>

        <Typography
          variant="body1"
          pl={{ xs: 0, md: 3 }}
          pr={{ xs: 0, md: 3 }}
          fontWeight={500}
          pt={2}
          color="primary.main"
          sx={{
            width: { xs: "100%", md: "85%" },
            marginLeft: { xs: "0", md: "auto" },
            backgroundColor: { xs: "none", md: "quotesPink.main" },
          }}
        >
          Volim procese, volim kada stvari rastu i razvijaju se, bilo da je to
          ideja, projekat ili odnos. Vjerujem u mogućnost promjena, u to da je
          život pun prilika, čak i kada se čini da su stvari u tišini.
        </Typography>

        <Typography
          variant="body1"
          pl={{ xs: 0, md: 3 }}
          pr={{ xs: 0, md: 3 }}
          fontWeight={500}
          color="primary.main"
          sx={{
            backgroundColor: { xs: "none", md: "quotesPink.main" },
          }}
        >
          Volim duboke razgovore, one koji ne lete samo po površini, već idu
          pravo u srž, otkrivajući stvarnu suštinu stvari.
        </Typography>

        <Typography
          variant="body1"
          pl={{ xs: 0, md: 3 }}
          pr={{ xs: 0, md: 3 }}
          fontWeight={500}
          color="primary.main"
          sx={{
            backgroundColor: { xs: "none", md: "quotesPink.main" },
          }}
        >
          Volim trenutke tišine kada se sve usmjeri ka unutrašnjem svijetu, a ti
          znaš da se povezuješ sa sobom na najdubljem nivou.
        </Typography>

        <Typography
          variant="body1"
          pl={{ xs: 0, md: 3 }}
          pr={{ xs: 0, md: 3 }}
          fontWeight={500}
          color="primary.main"
          sx={{
            backgroundColor: { xs: "none", md: "quotesPink.main" },
          }}
        >
          Volim da osluškujem stvari ispod površine – ljude, trenutke, tišinu
          između riječi.
        </Typography>

        <Typography
          variant="body1"
          pl={{ xs: 0, md: 3 }}
          pr={{ xs: 0, md: 3 }}
          fontWeight={500}
          pt={2}
          color="primary.main"
          sx={{
            backgroundColor: { xs: "none", md: "quotesPink.main" },
          }}
        >
          Učim, istražujem, stvaram. Nekada u haosu ideja, nekada u potpunom
          miru, ali uvijek sa osjećajem da je putovanje vrijedno.
        </Typography>

        <Typography
          variant="body1"
          pl={{ xs: 0, md: 3 }}
          pr={{ xs: 0, md: 3 }}
          fontWeight={500}
          color="primary.main"
          sx={{
            backgroundColor: { xs: "none", md: "quotesPink.main" },
          }}
        >
          Vjerujem u autentičnost, u pravu povezanost, u one male, neuhvatljive
          trenutke kada znaš da si na pravom mjestu.
        </Typography>

        <Typography
          variant="body1"
          pl={{ xs: 0, md: 3 }}
          pr={{ xs: 0, md: 3 }}
          fontWeight={500}
          color="primary.main"
          sx={{
            backgroundColor: { xs: "none", md: "quotesPink.main" },
          }}
        >
          Najviše volim kada mogu da budem svoja, onako skroz –bez maske, bez
          potrebe da budem nešto drugo osim onoga što jesam. I kada mogu da se
          izgubim u nečemu što me istinski pokreće. Nekada je to razgovor,
          nekada knjiga ili jednostavno trenutak kada se potpuno prepustim
          nečemu što me pokreće.
        </Typography>

        <Typography
          variant="body1"
          pl={{ xs: 0, md: 3 }}
          pr={{ xs: 0, md: 3 }}
          fontWeight={500}
          pt={2}
          color="primary.main"
          sx={{
            backgroundColor: { xs: "none", md: "quotesPink.main" },
          }}
        >
          Autentičnost za mene znači slobodu. Slobodu da budem nježna i snažna u
          isto vrijeme, da budem tiha kada osjećam da je tišina potrebna, da
          budem iskrena i odvažna kada osjećam potrebu da kažem ono što nosim u
          sebi. To ne znači da sam uvijek sigurna u sebe – naprotiv. Smatram da
          ne postoji ništa autentičnije od trenutaka kada pokažeš svoju
          ranjivost. Kada se otvoriš pred nekim, pustiš da se vide tvoje
          nesigurnosti, strahovi, snovi.
        </Typography>

        <Typography
          variant="body1"
          pl={{ xs: 0, md: 3 }}
          pr={{ xs: 0, md: 3 }}
          fontWeight={500}
          pt={2}
          color="primary.main"
          sx={{
            backgroundColor: { xs: "none", md: "quotesPink.main" },
          }}
        >
          Povezivanje – sa sobom, sa drugima, sa nečim većim od nas – u tome
          pronalazim smisao. Kada stvarno stanemo jedni pred druge, bez igara i
          očekivanja, dešava se nešto važno. To nisu uvijek laki susreti, jer
          povezivanje traži hrabrost, traži da budemo ranjivi. Ali upravo u toj
          ranjivosti leži prava bliskost. Nekada je to dugačak razgovor u kojem
          se prepoznamo, nekada samo pogled ili tišina koja kaže sve. To znači
          dati sebi prostor da budem iskrena, nesavršena, živa.
        </Typography>

        <Typography
          variant="body1"
          pl={{ xs: 0, md: 3 }}
          pr={{ xs: 0, md: 3 }}
          fontWeight={500}
          color="primary.main"
          sx={{
            backgroundColor: { xs: "none", md: "quotesPink.main" },
          }}
        >
          Verujem da, kada smo uistinu povezani sa sobom, tada možemo najdublje
          i najiskrenije da se povežemo i sa drugima.
        </Typography>

        <Typography
          variant="body1"
          pl={{ xs: 0, md: 3 }}
          pr={{ xs: 0, md: 3 }}
          pb={{ xs: 0, md: 3 }}
          fontWeight={500}
          color="primary.main"
          sx={{
            backgroundColor: { xs: "none", md: "quotesPink.main" },
            borderBottomRightRadius: "12px",
            borderBottomLeftRadius: "12px",
          }}
        >
          Vjerujem da baš u tom procesu leži prava snaga, jer tek kada zagrlimo
          sve djelove sebe, možemo da ih ponudimo svijetu bez straha.
        </Typography>
      </Collapse>

      <Box textAlign="center" mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggle}
          sx={{
            textTransform: "none",
            backgroundColor: "quotesPink.main",
            "&:hover": {
              backgroundColor: "quotesPink.dark",
            },
          }}
        >
          {showMore ? "Prikaži manje" : "Pročitaj više"}
        </Button>
      </Box>
    </Box>
  );
};

export default AppAboutTextMobile;
