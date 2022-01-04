import { useContext, useEffect, useState } from "react";
import Box from "./Box";
import Text from "./Text";
import { differenceInSeconds, isSameDay } from "date-fns";
import { StatesContext } from "./StatesContext";
import { ethers } from "ethers";
import axios from "axios";
import {
  CONTRACT_ABI_URL,
  CONTRACT_ADDRESS,
} from "src/utils/constants";
import { statuses } from "src/containers/home";

const DAY_SECONDS = 86400;
const HOUR_SECONDS = 3600;
const MINUTE_SECONDS = 60;

const CountdownTimer = ({
  status,
  setStatus,
  deadline,
}: {
  deadline: string;
  status: string;
  setStatus: (string) => void;
}) => {
  const state = useContext(StatesContext);
  const [counter, setCounter] = useState(0);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    if (deadline) {
      const now = new Date();
      const target = new Date(parseInt(deadline) * 1000);

      const diff = differenceInSeconds(target, now);

      setCounter(diff);
    }
  }, [deadline]);

  useEffect(() => {
    if (counter < DAY_SECONDS) {
      const hours = Math.floor(counter / HOUR_SECONDS);
      const minutes = Math.floor(
        (counter - hours * HOUR_SECONDS) / MINUTE_SECONDS
      );
      const seconds = Math.floor(
        counter - hours * HOUR_SECONDS - minutes * MINUTE_SECONDS
      );
      const countdown = `${hours} hours ${minutes} minutes ${seconds} seconds`;
      setCountdown(countdown);
    } else {
      const days = Math.floor(counter / DAY_SECONDS);

      const hours = Math.floor((counter - days * DAY_SECONDS) / HOUR_SECONDS);
      const minutes = Math.floor(
        (counter - days * DAY_SECONDS - hours * HOUR_SECONDS) / MINUTE_SECONDS
      );
      const seconds =
        counter -
        days * DAY_SECONDS -
        hours * HOUR_SECONDS -
        minutes * MINUTE_SECONDS;
      const countdown = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
      setCountdown(countdown);
    }
    const interval = setInterval(() => {
      if (counter === 1) {
        if (status === statuses.PRESALE_NEXT) {
          setStatus(statuses.PRESALE_ACTIVE);
        } else if (
          status === statuses.PRESALE_ACTIVE ||
          status === statuses.SALE_NEXT
        ) {
          setStatus(statuses.SALE_ACTIVE);
        }
      }
      setCounter(counter - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <Box>
      <Text as="s1" letterSpacing="0.2rem" textShadow="0 0 20px #000000">
        {countdown}
      </Text>
    </Box>
  );
};

export default CountdownTimer;
