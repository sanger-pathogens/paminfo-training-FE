import { render } from "@testing-library/svelte";
import Header from "$lib/components/layout/Header.svelte";

const LABEL_PROJECT_NAME = "GPS";

it("doesn't display a project logo if no project is passed", () => {
  const { queryByAltText } = render(Header);

  expect(queryByAltText(LABEL_PROJECT_NAME)).toBeNull();
});

it("doesn't display a project logo if a project has no logo URL", () => {
  const { queryByAltText } = render(Header, {
    project: { name: LABEL_PROJECT_NAME },
  });

  expect(queryByAltText(LABEL_PROJECT_NAME)).toBeNull();
});

it("displays project information from the prop", () => {
  const baseUrl = location.origin;
  const project = {
    name: LABEL_PROJECT_NAME,
    project_url: "project/url",
    logo_url: `${baseUrl}/img/url.svg`,
    header_links: [
      { url: `${baseUrl}/some/url`, label: "About" },
      { url: `${baseUrl}/a/url`, label: "Team" },
    ],
  };
  const { container, getByText, getByAltText } = render(Header, {
    project,
  });

  const logoImg = getByAltText(project.name);
  expect(logoImg.alt).toBe(project.name);
  expect(logoImg.src).toBe(project.logo_url);
  expect(
    container.querySelector(`a[href="${project.project_url}"]`)
  ).not.toBeNull();
  project.header_links.forEach(({ url, label }) =>
    expect(getByText(label).href).toBe(url)
  );
});
