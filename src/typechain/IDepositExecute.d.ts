/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IDepositExecuteInterface extends ethers.utils.Interface {
  functions: {
    "deposit(bytes32,address,bytes)": FunctionFragment;
    "executeProposal(bytes32,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BytesLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;

  events: {};
}

export class IDepositExecute extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IDepositExecuteInterface;

  functions: {
    deposit(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "deposit(bytes32,address,bytes)"(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeProposal(bytes32,bytes)"(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  deposit(
    resourceID: BytesLike,
    depositor: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "deposit(bytes32,address,bytes)"(
    resourceID: BytesLike,
    depositor: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  executeProposal(
    resourceID: BytesLike,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeProposal(bytes32,bytes)"(
    resourceID: BytesLike,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "deposit(bytes32,address,bytes)"(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "executeProposal(bytes32,bytes)"(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    deposit(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "deposit(bytes32,address,bytes)"(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeProposal(bytes32,bytes)"(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "deposit(bytes32,address,bytes)"(
      resourceID: BytesLike,
      depositor: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeProposal(bytes32,bytes)"(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
