const input = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`
  .split('\n')
  .map((elem) => elem.split('-'));

const input2 = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`
  .split('\n')
  .map((elem) => elem.split('-'));

const input3 = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`
  .split('\n')
  .map((elem) => elem.split('-'));

const input4 = `lg-GW
pt-start
pt-uq
nx-lg
ve-GW
start-nx
GW-start
GW-nx
pt-SM
sx-GW
lg-end
nx-SM
lg-SM
pt-nx
end-ve
ve-SM
TG-uq
end-SM
SM-uq`
  .split('\n')
  .map((elem) => elem.split('-'));

const buildGraph = (input) =>
  input.reduce((caves, [from, to]) => {
    const newCaves = { ...caves };
    if (newCaves[from]) newCaves[from].adjacencies.push(to);
    else newCaves[from] = { adjacencies: [to], visited: false };
    if (newCaves[to]) newCaves[to].adjacencies.push(from);
    else newCaves[to] = { adjacencies: [from], visited: false };
    return newCaves;
  }, {});

const findPaths = (graph, from, to, localPath = [], paths = []) => {
  const newLocalPath = [...localPath, from];
  if (from === to) {
    paths.push(newLocalPath);
    return;
  }
  const newGraph = { ...graph };
  if (from.toLowerCase() === from) newGraph[from] = { ...newGraph[from], visited: true };
  const { adjacencies } = newGraph[from];
  for (let i = 0; i < adjacencies.length; i++) {
    if (!newGraph[adjacencies[i]].visited) {
      findPaths(newGraph, adjacencies[i], to, newLocalPath, paths);
    }
  }
  return paths;
};

const countPaths = (input) => {
  const caves = buildGraph(input);
  const paths = findPaths(caves, 'start', 'end', 'b');
  return paths.length;
};

console.log(countPaths(input4));

const findPaths2 = (graph, from, to, repeatable, localPath = [], paths = []) => {
  const newLocalPath = [...localPath, from];
  if (from === to) {
    paths.push(newLocalPath);
    return;
  }
  const newGraph = { ...graph };
  if (from.toLowerCase() === from) {
    if (from === repeatable) {
      if (newGraph[from].visitedOnce) newGraph[from] = { ...newGraph[from], visited: true };
      else newGraph[from] = { ...newGraph[from], visitedOnce: true };
    } else {
      newGraph[from] = { ...newGraph[from], visited: true };
    }
  }
  const { adjacencies } = newGraph[from];
  for (let i = 0; i < adjacencies.length; i++) {
    if (!newGraph[adjacencies[i]].visited) {
      findPaths2(newGraph, adjacencies[i], to, repeatable, newLocalPath, paths);
    }
  }
  return paths;
};

const compareArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const countPaths2 = (input) => {
  const caves = buildGraph(input);
  const smallCaves = Object.keys(caves).filter(
    (cave) => cave.toLowerCase() === cave && cave !== 'start' && cave !== 'end',
  );
  const paths = [];
  for (let i = 0; i < smallCaves.length; i++) {
    const tempPaths = findPaths2(caves, 'start', 'end', smallCaves[i]);
    tempPaths.forEach((tempPath) => {
      if (!paths.some((path) => compareArrays(path, tempPath))) paths.push(tempPath);
    });
  }
  return paths.length;
};

console.log(countPaths2(input4));
