import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CheatSheetButton from "./CheatSheetButton";
import noditNodes from "../assets/nodit-nodes.avif";
import web3DataAPI from "../assets/image_edited.png";
import webhook from "../assets/webhook.avif";
import noditMCP from "../assets/nodit-mcp.avif";

interface CheatSheetCardProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

function CheatSheetCard({ children, backgroundImage }: CheatSheetCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        flexGrow: 1,
        background: "transparent",
        borderColor: "#22242a",
        borderRadius: 6,
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.5)),
          url(${backgroundImage})
          `,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        boxShadow: "0.3px 0 2px var(--cheatsheet-nodit-color)",
      }}
    >
      {children}
    </Card>
  );
}

interface CheatSheetCardContentProps {
  hashLink?: string;
  exampleName?: string;
  newTab?: boolean;
  title: string;
  bullets: string[];
  learnMoreLink: string;
  apiName?: string;
  apiLink?: string;
}

function CheatSheetCardContent({
  hashLink,
  exampleName,
  newTab,
  title,
  bullets,
  learnMoreLink,
  apiName,
  apiLink,
}: CheatSheetCardContentProps) {
  return (
    <React.Fragment>
      <CardContent
        sx={{
          padding: 1.4,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: "var(--cheatsheet-nodit-color)",
            fontSize: 18,
            m: 1,
            fontWeight: "bolder",
          }}
        >
          {title}
        </Typography>
        <Typography component="div" sx={{ color: "white", fontSize: 16 }}>
          <ul>
            {bullets.map((b, i) => (
              <li key={i}>
                {b}
                <br />
              </li>
            ))}
          </ul>
        </Typography>
        <CardActions
          sx={{
            mt: "auto",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <CheatSheetButton href={learnMoreLink}>Learn More</CheatSheetButton>
          {apiName && apiLink && (
            <CheatSheetButton href={apiLink}>{apiName}</CheatSheetButton>
          )}
          {hashLink && exampleName && (
            <CheatSheetButton href={hashLink} newTab={newTab}>
              {exampleName}
            </CheatSheetButton>
          )}
        </CardActions>
      </CardContent>
    </React.Fragment>
  );
}

export default function CheatSheetCards() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: "20px",
        mb: "20px",
      }}
    >
      <Grid
        container
        spacing={2}
        columns={{ xs: 6, md: 12 }}
        alignItems="stretch"
      >
        <Grid size={6} sx={{ display: "flex" }}>
          <CheatSheetCard backgroundImage={noditNodes}>
            <CheatSheetCardContent
              hashLink="/#node-api-usage-example"
              exampleName="Node API Usage Example"
              newTab={false}
              title="Elastic Node"
              bullets={[
                "안정성을 갖춘 고성능 공유 노드를 제공해요.",
                "즉시 사용 가능한 RPC Endpoint를 제공해요.",
                "Node API를 통해 온체인 데이터를 읽고 쓸 수 있어요.",
              ]}
              learnMoreLink="https://developer.nodit.io/docs/elastic-node"
              apiName="GIWA Node API"
              apiLink="https://developer.nodit.io/reference/giwa-eth_blocknumber"
            />
          </CheatSheetCard>
        </Grid>
        <Grid size={6} sx={{ display: "flex" }}>
          <CheatSheetCard backgroundImage={web3DataAPI}>
            <CheatSheetCardContent
              hashLink="/#web3-data-api-usage-example"
              exampleName="Web3 Data API Usage Example"
              newTab={false}
              title="Web3 Data API"
              bullets={[
                "Block, Transaction, Token, Account와 같은 실시간 온체인 데이터와 이력을 조회할 수 있어요.",
                "토큰의 전송 이력, 계정의 토큰 변동 추적과 같은 용도로 적합해요.",
              ]}
              learnMoreLink="https://developer.nodit.io/docs/web3-data-api"
              apiName="GIWA Web3 Data API"
              apiLink="https://developer.nodit.io/reference/giwa-gettokentransfersbyaccount"
            />
          </CheatSheetCard>
        </Grid>
        <Grid size={6} sx={{ display: "flex" }}>
          <CheatSheetCard backgroundImage={webhook}>
            <CheatSheetCardContent
              hashLink="/#webhook-usage-example"
              exampleName="Webhook Usage Example"
              newTab={false}
              title="Webhook / Stream"
              bullets={[
                "실시간 온체인 이벤트를 추적하여 알림을 받거나, 스트림 데이터로 구독할 수 있는 모니터링 도구에요.",
                "블록체인의 비동기 이벤트를 추적하기 위한 필수 도구에요.",
              ]}
              learnMoreLink="https://developer.nodit.io/docs/webhook"
              apiName="Webhook API"
              apiLink="https://developer.nodit.io/reference/how-to-use-webhook"
            />
          </CheatSheetCard>
        </Grid>
        <Grid size={6} sx={{ display: "flex" }}>
          <CheatSheetCard backgroundImage={noditMCP}>
            <CheatSheetCardContent
              title="MCP"
              bullets={[
                "Nodit은 MCP(Model Context Protocol)를 지원해요.",
                "Nodit의 다양한 서비스를 MCP를 통해 호출할 수 있어요.",
                "코드없이 자연어로 요청해도 AI가 해석해 적절한 Nodit API를 골라 직접 실행해줘요.",
              ]}
              learnMoreLink="https://developer.nodit.io/docs/nodit-mcp"
            />
          </CheatSheetCard>
        </Grid>
      </Grid>
    </Box>
  );
}
