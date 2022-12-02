const polymer = 'FPNFCVSNNFSFHHOCNBOB';

const rules = `ON -> S
SO -> B
OH -> C
SN -> F
BP -> O
SK -> F
OO -> K
CF -> O
PP -> F
KS -> K
KN -> B
BN -> H
HN -> H
NP -> P
BB -> N
SB -> F
BH -> V
NV -> S
PO -> S
CN -> N
VP -> B
HH -> B
NB -> V
NF -> O
BV -> B
CV -> B
SS -> H
CB -> C
VN -> S
FH -> K
BF -> H
NH -> P
PV -> K
OP -> F
HO -> N
SH -> C
VH -> P
VK -> B
OF -> F
KK -> B
SC -> H
CO -> S
BK -> V
PF -> B
OK -> K
FO -> V
CH -> O
KO -> B
CS -> V
OC -> P
SP -> V
KF -> C
HV -> S
KH -> B
VS -> K
KB -> F
FF -> P
VF -> H
NC -> S
HB -> V
NN -> C
FV -> B
PH -> V
KV -> C
PB -> C
OS -> O
PS -> H
FS -> N
FP -> O
VV -> O
FN -> V
NO -> K
NK -> V
OB -> F
PC -> O
OV -> H
FK -> C
HS -> F
SF -> N
VC -> C
BS -> N
PK -> O
FB -> S
CK -> B
KP -> N
KC -> F
BC -> F
HK -> H
VO -> O
NS -> B
VB -> K
FC -> K
SV -> O
HF -> H
HC -> C
CP -> O
CC -> P
PN -> P
HP -> C
BO -> F`
  .split('\n')
  .reduce((rules, line) => {
    const [key, value] = line.split(' -> ');
    return { ...rules, [key]: value };
  }, {});

const polymer2 = 'NNCB';

const rules2 = `CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`
  .split('\n')
  .reduce((rules, line) => {
    const [key, value] = line.split(' -> ');
    return { ...rules, [key]: value };
  }, {});

const step = (polymer, rules) =>
  polymer.replace(
    /[A-Z](?=[A-Z])/g,
    (match, offset) => match + rules[match + polymer[offset + 1]] ?? '',
  );

const getCountOfCharacters = (polymer) =>
  polymer.split('').reduce((count, char) => ({ ...count, [char]: (count[char] ?? 0) + 1 }), {});

const getDifference = (polymer, rules) => {
  for (let i = 0; i < 10; i++) {
    polymer = step(polymer, rules);
  }
  const countOfCharacters = getCountOfCharacters(polymer);
  const maxMin = Object.values(countOfCharacters).reduce(
    (maxMin, value) => {
      const max = Math.max(maxMin[0], value);
      const min = Math.min(maxMin[1], value);
      return [max, min];
    },
    [0, Infinity],
  );
  return maxMin[0] - maxMin[1];
};

console.log(getDifference(polymer, rules));
