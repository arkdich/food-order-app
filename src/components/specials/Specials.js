import { useSelector } from 'react-redux';
import { Section, Title } from '../globalStyle/Section.styles';

export default function Specials() {
  const specials = useSelector((state) => state.specials.items);

  console.log(specials);
  return (
    <Section>
      <Title>{specials.title}</Title>
    </Section>
  );
}
