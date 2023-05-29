import { bottts } from '@dicebear/collection';
import { red, orange, yellow, emerald, sky, violet, pink, gray } from 'tailwindcss/colors';

const defaultBackgroundColors = [
  ...[red[100], red[200], red[300], red[400], red[500]],
  ...[orange[100], orange[200], orange[300], orange[400], orange[500]],
  ...[yellow[100], yellow[200], yellow[300], yellow[400], yellow[500]],
  ...[emerald[100], emerald[200], emerald[300], emerald[400], emerald[500]],
  ...[sky[100], sky[200], sky[300], sky[400], sky[500]],
  ...[violet[100], violet[200], violet[300], violet[400], violet[500]],
  ...[pink[100], pink[200], pink[300], pink[400], pink[500]],
  ...[gray[100], gray[200], gray[300], gray[400], gray[500]],
].map((color) => color.replace('#', ''));

let allOptions = {
  backgroundColor: defaultBackgroundColors,
};
Object.keys(bottts.schema.properties).forEach((element) => {
  const arr = bottts.schema.properties[element].default;
  if (typeof arr === 'object') {
    allOptions = { ...allOptions, [element]: arr };
  }
});

let initialOptions = {};
Object.keys(allOptions).forEach((element) => {
  initialOptions = { [element]: allOptions[element][0], ...initialOptions };
});

const enums = {
  backgroundColor: 'Background Color',
  baseColor: 'Color',
  eyes: 'Eyes',
  face: 'Face',
  mouth: 'Mouth',
  sides: 'Sides',
  texture: 'Texture',
  top: 'Top',
};

export { allOptions, initialOptions, enums };
