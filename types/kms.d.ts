/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 算法的名称 和 标识 */
declare interface AlgorithmInfo {
  /** 算法的标识 */
  KeyUsage?: string;
  /** 算法的名称 */
  Algorithm?: string;
}

/** 数据密钥属性 */
declare interface DataKey {
  /** DataKey的全局唯一标识。 */
  DataKeyId?: string;
}

/** 数据密钥属性信息 */
declare interface DataKeyMetadata {
  /** DataKey的全局唯一标识 */
  DataKeyId?: string;
  /** CMK的全局唯一标识 */
  KeyId?: string;
  /** 作为密钥更容易辨识，更容易被人看懂的数据密钥名称 */
  DataKeyName?: string;
  /** 数据密钥的长度,单位字节 */
  NumberOfBytes?: number;
  /** 密钥创建时间 */
  CreateTime?: number;
  /** DataKey的描述 */
  Description?: string;
  /** DataKey的状态， 取值为：Enabled | Disabled | PendingDelete */
  KeyState?: string;
  /** 创建者 */
  CreatorUin?: number;
  /** 数据密钥的创建者，用户创建的为 user，授权各云产品自动创建的为对应的产品名 */
  Owner?: string;
  /** 计划删除的时间 */
  DeletionDate?: number;
  /** DataKey 密钥材料类型，由KMS创建的为： TENCENT_KMS， 由用户导入的类型为：EXTERNAL */
  Origin?: string;
  /** HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效） */
  HsmClusterId?: string;
  /** 资源ID，格式：creatorUin/$creatorUin/$dataKeyId */
  ResourceId?: string;
}

/** 设备指纹 */
declare interface DeviceFingerprint {
  /** 指纹信息，由设备指纹采集工具采集获得，格式满足正则表达式：^[0-9a-f]{8}[\-][0-9a-f]{14}[\-][0-9a-f]{14}[\-][0-9a-f]{14}[\-][0-9a-f]{16}$ */
  Identity: string;
  /** 描述信息，如：IP，设备名称等，最大1024字节 */
  Description?: string;
}

/** 独享版集群 */
declare interface ExclusiveHSM {
  /** 独享集群Id */
  HsmClusterId?: string;
  /** 独享集群名称 */
  HsmClusterName?: string;
}

/** 返回CMK列表信息 */
declare interface Key {
  /** CMK的全局唯一标识。 */
  KeyId?: string;
}

/** CMK属性信息 */
declare interface KeyMetadata {
  /** CMK的全局唯一标识 */
  KeyId?: string;
  /** 作为密钥更容易辨识，更容易被人看懂的别名 */
  Alias?: string;
  /** 密钥创建时间 */
  CreateTime?: number;
  /** CMK的描述 */
  Description?: string;
  /** CMK的状态， 取值为：Enabled | Disabled | PendingDelete | PendingImport | Archived */
  KeyState?: string;
  /** CMK用途，取值为: ENCRYPT_DECRYPT | ASYMMETRIC_DECRYPT_RSA_2048 | ASYMMETRIC_DECRYPT_SM2 | ASYMMETRIC_SIGN_VERIFY_SM2 | ASYMMETRIC_SIGN_VERIFY_RSA_2048 | ASYMMETRIC_SIGN_VERIFY_ECC */
  KeyUsage?: string;
  /** CMK类型，2 表示符合FIPS标准，4表示符合国密标准 */
  Type?: number;
  /** 创建者 */
  CreatorUin?: number;
  /** 是否开启了密钥轮换功能 */
  KeyRotationEnabled?: boolean;
  /** CMK的创建者，用户创建的为 user，授权各云产品自动创建的为对应的产品名 */
  Owner?: string;
  /** 在密钥轮换开启状态下，下次轮换的时间 */
  NextRotateTime?: number;
  /** 计划删除的时间 */
  DeletionDate?: number;
  /** CMK 密钥材料类型，由KMS创建的为： TENCENT_KMS， 由用户导入的类型为：EXTERNAL */
  Origin?: string;
  /** 在Origin为 EXTERNAL 时有效，表示密钥材料的有效日期， 0 表示不过期 */
  ValidTo?: number;
  /** 资源ID，格式：creatorUin/$creatorUin/$keyId */
  ResourceId?: string;
  /** HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效） */
  HsmClusterId?: string;
  /** 密钥轮转周期（天） */
  RotateDays?: number;
  /** 上次乱转时间（Unix timestamp） */
  LastRotateTime?: number;
}

/** 标签键和标签值 */
declare interface Tag {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 标签过滤器 */
declare interface TagFilter {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue?: string[];
}

/** 白盒密钥信息 */
declare interface WhiteboxKeyInfo {
  /** 白盒密钥的全局唯一标识符 */
  KeyId?: string;
  /** 作为密钥更容易辨识，更容易被人看懂的别名， 不可为空，1-60个字母数字 - _ 的组合，首字符必须为字母或者数字. 不可重复 */
  Alias?: string;
  /** 创建者 */
  CreatorUin?: number;
  /** 密钥的描述信息 */
  Description?: string;
  /** 密钥创建时间，Unix时间戳 */
  CreateTime?: number;
  /** 白盒密钥的状态， 取值为：Enabled | Disabled */
  Status?: string;
  /** 创建者 */
  OwnerUin?: number;
  /** 密钥所用的算法类型 */
  Algorithm?: string;
  /** 白盒加密密钥，base64编码 */
  EncryptKey?: string;
  /** 白盒解密密钥，base64编码 */
  DecryptKey?: string;
  /** 资源ID，格式：creatorUin/$creatorUin/$keyId */
  ResourceId?: string;
  /** 是否有设备指纹与当前密钥绑定 */
  DeviceFingerprintBind?: boolean;
}

declare interface ArchiveKeyRequest {
  /** CMK唯一标识符 */
  KeyId: string;
}

declare interface ArchiveKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AsymmetricRsaDecryptRequest {
  /** CMK的唯一标识 */
  KeyId: string;
  /** 使用PublicKey加密的密文，Base64编码 */
  Ciphertext: string;
  /** 在使用公钥加密时对应的算法：当前支持RSAES_PKCS1_V1_5、RSAES_OAEP_SHA_1、RSAES_OAEP_SHA_256 */
  Algorithm: string;
}

declare interface AsymmetricRsaDecryptResponse {
  /** CMK的唯一标识 */
  KeyId?: string;
  /** 解密后的明文，base64编码 */
  Plaintext?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AsymmetricSm2DecryptRequest {
  /** CMK的唯一标识 */
  KeyId: string;
  /** 使用PublicKey加密的密文，Base64编码，原始密文格式需要为C1C3C2_ASN1。原始密文长度不能超过256字节。 */
  Ciphertext: string;
}

declare interface AsymmetricSm2DecryptResponse {
  /** CMK的唯一标识 */
  KeyId?: string;
  /** 解密后的明文，base64编码 */
  Plaintext?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindCloudResourceRequest {
  /** cmk的ID */
  KeyId: string;
  /** 云产品的唯一性标识符 */
  ProductId: string;
  /** 资源/实例ID，由调用方根据自己的云产品特征来定义，以字符串形式做存储。 */
  ResourceId: string;
}

declare interface BindCloudResourceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelDataKeyDeletionRequest {
  /** 数据密钥的唯一标志符 */
  DataKeyId: string;
}

declare interface CancelDataKeyDeletionResponse {
  /** 唯一标志被计划删除的数据密钥 */
  DataKeyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelKeyArchiveRequest {
  /** CMK唯一标识符 */
  KeyId: string;
}

declare interface CancelKeyArchiveResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelKeyDeletionRequest {
  /** 需要被取消删除的CMK的唯一标志 */
  KeyId: string;
}

declare interface CancelKeyDeletionResponse {
  /** 唯一标志被取消删除的CMK。 */
  KeyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateKeyRequest {
  /** 作为密钥更容易辨识，更容易被人看懂的别名， 不可为空，1-60个字母数字 - _ 的组合，首字符必须为字母或者数字。以 kms- 作为前缀的用于云产品使用，Alias 不可重复。 */
  Alias: string;
  /** CMK 的描述，最大1024字节 */
  Description?: string;
  /** 指定key的用途，默认为 "ENCRYPT_DECRYPT" 表示创建对称加解密密钥，其它支持用途 “ASYMMETRIC_DECRYPT_RSA_2048” 表示创建用于加解密的RSA2048非对称密钥，“ASYMMETRIC_DECRYPT_SM2” 表示创建用于加解密的SM2非对称密钥，“ASYMMETRIC_SIGN_VERIFY_SM2” 表示创建用于签名验签的SM2非对称密钥，“ASYMMETRIC_SIGN_VERIFY_ECC” 表示创建用于签名验签的ECC非对称密钥，“ASYMMETRIC_SIGN_VERIFY_RSA_2048” 表示创建用于签名验签的RSA_2048非对称密钥，“ASYMMETRIC_SIGN_VERIFY_ECDSA384”表示创建用于签名验签的 ECDSA384 非对称秘钥。完整的秘钥用途与算法支持列表可通过 ListAlgorithms 接口获取。 */
  KeyUsage?: string;
  /** 指定key类型，默认为1，1表示默认类型，由KMS创建CMK密钥，2 表示EXTERNAL 类型，该类型需要用户导入密钥材料，参考 GetParametersForImport 和 ImportKeyMaterial 接口 */
  Type?: number;
  /** 标签列表 */
  Tags?: Tag[];
  /** KMS 高级版对应的 HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）。 */
  HsmClusterId?: string;
}

declare interface CreateKeyResponse {
  /** CMK的全局唯一标识符 */
  KeyId?: string;
  /** 作为密钥更容易辨识，更容易被人看懂的别名 */
  Alias?: string;
  /** 密钥创建时间，unix时间戳 */
  CreateTime?: number;
  /** CMK的描述 */
  Description?: string;
  /** CMK的状态 */
  KeyState?: string;
  /** CMK的用途 */
  KeyUsage?: string;
  /** 标签操作的返回码. 0: 成功；1: 内部错误；2: 业务处理错误 */
  TagCode?: number;
  /** 标签操作的返回信息 */
  TagMsg?: string;
  /** HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效） */
  HsmClusterId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWhiteBoxKeyRequest {
  /** 作为密钥更容易辨识，更容易被人看懂的别名， 不可为空，1-60个字母数字 - _ 的组合，首字符必须为字母或者数字。Alias不可重复。 */
  Alias: string;
  /** 创建密钥所有的算法类型，支持的取值：AES_256,SM4 */
  Algorithm: string;
  /** 密钥的描述，最大1024字节 */
  Description?: string;
  /** 标签列表 */
  Tags?: Tag[];
}

declare interface CreateWhiteBoxKeyResponse {
  /** 用于加密的密钥，base64编码 */
  EncryptKey?: string;
  /** 用于解密的密钥，base64编码 */
  DecryptKey?: string;
  /** 白盒密钥的全局唯一标识符 */
  KeyId?: string;
  /** 标签操作的返回码. 0: 成功；1: 内部错误；2: 业务处理错误 */
  TagCode?: number;
  /** 标签操作的返回信息 */
  TagMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DecryptRequest {
  /** 待解密的密文数据 */
  CiphertextBlob: string;
  /** key/value对的json字符串，如果Encrypt指定了该参数，则在调用Decrypt API时需要提供同样的参数，最大支持1024字符 */
  EncryptionContext?: string;
  /** PEM 格式公钥字符串，支持 RSA2048 和 SM2 公钥，用于对返回数据中的 Plaintext 值进行加密。若为空，则不对 Plaintext 值加密。 */
  EncryptionPublicKey?: string;
  /** 非对称加密算法，配合 EncryptionPublicKey 对返回数据进行加密。目前支持：SM2（以 C1C3C2 格式返回密文），SM2_C1C3C2_ASN1 （以 C1C3C2 ASN1 格式返回密文），RSAES_PKCS1_V1_5，RSAES_OAEP_SHA_1，RSAES_OAEP_SHA_256。若为空，则默认为 SM2。 */
  EncryptionAlgorithm?: string;
}

declare interface DecryptResponse {
  /** CMK的全局唯一标识 */
  KeyId?: string;
  /** 若调用时未提供 EncryptionPublicKey，该字段值为 Base64 编码的明文，需进行 Base64 解码以获取明文。若调用时提供了 EncryptionPublicKey，则该字段值为使用 EncryptionPublicKey 公钥进行非对称加密后的 Base64 编码的密文。需在 Base64 解码后，使用用户上传的公钥对应的私钥进行进一步解密，以获取明文。 */
  Plaintext?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteImportedKeyMaterialRequest {
  /** 指定需要删除密钥材料的EXTERNAL CMK。 */
  KeyId: string;
}

declare interface DeleteImportedKeyMaterialResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWhiteBoxKeyRequest {
  /** 白盒密钥的全局唯一标识符 */
  KeyId: string;
}

declare interface DeleteWhiteBoxKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataKeyRequest {
  /** 数据密钥全局唯一标识符 */
  DataKeyId: string;
}

declare interface DescribeDataKeyResponse {
  /** 数据密钥属性信息 */
  DataKeyMetadata?: DataKeyMetadata;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataKeysRequest {
  /** 查询DataKey的ID列表，批量查询一次最多支持100个DataKeyId */
  DataKeyIds: string[];
}

declare interface DescribeDataKeysResponse {
  /** 返回数据密钥属性信息列表 */
  DataKeyMetadatas?: DataKeyMetadata[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKeyRequest {
  /** CMK全局唯一标识符 */
  KeyId: string;
}

declare interface DescribeKeyResponse {
  /** 密钥属性信息 */
  KeyMetadata?: KeyMetadata;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKeysRequest {
  /** 查询CMK的ID列表，批量查询一次最多支持100个KeyId */
  KeyIds: string[];
}

declare interface DescribeKeysResponse {
  /** 返回的属性信息列表 */
  KeyMetadatas?: KeyMetadata[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWhiteBoxDecryptKeyRequest {
  /** 白盒密钥的全局唯一标识符 */
  KeyId: string;
}

declare interface DescribeWhiteBoxDecryptKeyResponse {
  /** 白盒解密密钥，base64编码 */
  DecryptKey?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWhiteBoxDeviceFingerprintsRequest {
  /** 白盒密钥ID */
  KeyId: string;
}

declare interface DescribeWhiteBoxDeviceFingerprintsResponse {
  /** 设备指纹列表 */
  DeviceFingerprints?: DeviceFingerprint[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWhiteBoxKeyDetailsRequest {
  /** 过滤条件：密钥的状态，0：disabled，1：enabled */
  KeyStatus?: number;
  /** 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0 */
  Offset?: number;
  /** 含义跟 SQL 查询的 Limit 一致，表示本次最多获取 Limit 个元素。缺省值为0, 表示不分页 */
  Limit?: number;
  /** 标签过滤条件 */
  TagFilters?: TagFilter[];
}

declare interface DescribeWhiteBoxKeyDetailsResponse {
  /** 白盒密钥信息列表。 */
  KeyInfos?: WhiteboxKeyInfo[];
  /** 白盒密钥总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWhiteBoxKeyRequest {
  /** 白盒密钥的全局唯一标识符 */
  KeyId: string;
}

declare interface DescribeWhiteBoxKeyResponse {
  /** 白盒密钥信息 */
  KeyInfo?: WhiteboxKeyInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWhiteBoxServiceStatusRequest {
}

declare interface DescribeWhiteBoxServiceStatusResponse {
  /** 用户的白盒密钥服务是否可用 */
  ServiceEnabled?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableDataKeyRequest {
  /** 数据密钥唯一标识符 */
  DataKeyId: string;
}

declare interface DisableDataKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableDataKeysRequest {
  /** 需要批量禁用的DataKey Id 列表，数据密钥数量最大支持100 */
  DataKeyIds: string[];
}

declare interface DisableDataKeysResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableKeyRequest {
  /** CMK唯一标识符 */
  KeyId: string;
}

declare interface DisableKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableKeyRotationRequest {
  /** CMK唯一标识符 */
  KeyId: string;
}

declare interface DisableKeyRotationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableKeysRequest {
  /** 需要批量禁用的CMK Id 列表，CMK数量最大支持100 */
  KeyIds: string[];
}

declare interface DisableKeysResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableWhiteBoxKeyRequest {
  /** 白盒密钥的全局唯一标识符 */
  KeyId: string;
}

declare interface DisableWhiteBoxKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableWhiteBoxKeysRequest {
  /** 白盒密钥的全局唯一标识符列表。注意：要确保所有提供的KeyId是格式有效的，没有重复，个数不超过50个，并且都是有效存在的。 */
  KeyIds: string[];
}

declare interface DisableWhiteBoxKeysResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableDataKeyRequest {
  /** 数据密钥唯一标识符 */
  DataKeyId: string;
}

declare interface EnableDataKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableDataKeysRequest {
  /** 需要批量启用的DataKey Id 列表， 数据密钥数量最大支持100 */
  DataKeyIds: string[];
}

declare interface EnableDataKeysResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableKeyRequest {
  /** CMK唯一标识符 */
  KeyId: string;
}

declare interface EnableKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableKeyRotationRequest {
  /** CMK唯一标识符 */
  KeyId: string;
  /** 密钥轮转周期，单位天，允许范围 7 ~ 365，默认值 365。 */
  RotateDays?: number;
}

declare interface EnableKeyRotationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableKeysRequest {
  /** 需要批量启用的CMK Id 列表， CMK数量最大支持100 */
  KeyIds: string[];
}

declare interface EnableKeysResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableWhiteBoxKeyRequest {
  /** 白盒密钥的全局唯一标识符 */
  KeyId: string;
}

declare interface EnableWhiteBoxKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableWhiteBoxKeysRequest {
  /** 白盒密钥的全局唯一标识符列表。注意：要确保所有提供的KeyId是格式有效的，没有重复，个数不超过50个，并且都是有效存在的。 */
  KeyIds: string[];
}

declare interface EnableWhiteBoxKeysResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EncryptByWhiteBoxRequest {
  /** 白盒密钥的全局唯一标识符 */
  KeyId: string;
  /** 待加密的文本， base64编码，文本的原始长度最大不超过4KB */
  PlainText: string;
  /** 初始化向量，大小为 16 Bytes，加密算法会使用到, base64编码；如果不传，则由后端服务随机生成。用户需要自行保存该值，作为解密的参数。 */
  InitializationVector?: string;
}

declare interface EncryptByWhiteBoxResponse {
  /** 初始化向量，加密算法会使用到, base64编码。如果由调用方在入参中传入，则原样返回。如果调用方没有传入，则后端服务随机生成，并返回 */
  InitializationVector?: string;
  /** 加密后的密文，base64编码 */
  CipherText?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EncryptRequest {
  /** 调用CreateKey生成的CMK全局唯一标识符 */
  KeyId: string;
  /** 被加密的明文数据，该字段必须使用base64编码，原文最大长度支持4K */
  Plaintext: string;
  /** key/value对的json字符串，如果指定了该参数，则在调用Decrypt API时需要提供同样的参数，最大支持1024个字符 */
  EncryptionContext?: string;
}

declare interface EncryptResponse {
  /** 加密后的密文，base64编码。注意：本字段中打包了密文和密钥的相关信息，不是对明文的直接加密结果，只有将该字段作为Decrypt接口的输入参数，才可以解密出原文。 */
  CiphertextBlob?: string;
  /** 加密使用的CMK的全局唯一标识 */
  KeyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GenerateDataKeyRequest {
  /** CMK全局唯一标识符 */
  KeyId: string;
  /** 指定生成Datakey的加密算法以及Datakey大小，AES_128或者AES_256。KeySpec 和 NumberOfBytes 必须指定一个 */
  KeySpec?: string;
  /** 生成的DataKey的长度，同时指定NumberOfBytes和KeySpec时，以NumberOfBytes为准。最小值为1， 最大值为1024。KeySpec 和 NumberOfBytes 必须指定一个 */
  NumberOfBytes?: number;
  /** key/value对的json字符串，如果使用该字段，则返回的DataKey在解密时需要填入相同的字符串 */
  EncryptionContext?: string;
  /** PEM 格式公钥字符串，支持 RSA2048 和 SM2 公钥，用于对返回数据中的 Plaintext 值进行加密。若为空，则不对 Plaintext 值加密。 */
  EncryptionPublicKey?: string;
  /** 非对称加密算法，配合 EncryptionPublicKey 对返回数据进行加密。目前支持：SM2（以 C1C3C2 格式返回密文），SM2_C1C3C2_ASN1 （以 C1C3C2 ASN1 格式返回密文），RSAES_PKCS1_V1_5，RSAES_OAEP_SHA_1，RSAES_OAEP_SHA_256。若为空，则默认为 SM2。 */
  EncryptionAlgorithm?: string;
  /** 表示生成的数据密钥是否被KMS托管。1:表示被KMS托管保存,0:表示KMS不托管。 */
  IsHostedByKms?: number;
  /** 数据密钥的名称，当IsHostedByKms为1时,必须填写。当IsHostedByKms为0时,可以不填，KMS不托管。 */
  DataKeyName?: string;
  /** 数据密钥 的描述，最大100字节 */
  Description?: string;
  /** KMS 独享版对应的 HSM 集群 ID。如果指定HsmClusterId，表明根密钥在此集群里，会校验KeyId是否和HsmClusterId对应。 */
  HsmClusterId?: string;
}

declare interface GenerateDataKeyResponse {
  /** CMK的全局唯一标识 */
  KeyId?: string;
  /** 若调用时未提供 EncryptionPublicKey，该字段值为生成的数据密钥 DataKey 的 Base64 编码的明文，需进行 Base64 解码以获取 DataKey 明文。若调用时提供了 EncryptionPublicKey，则该字段值为使用 EncryptionPublicKey 公钥进行非对称加密后的 Base64 编码的密文。需在 Base64 解码后，使用用户上传的公钥对应的私钥进行进一步解密，以获取 DataKey 明文。 */
  Plaintext?: string;
  /** 数据密钥DataKey加密后的密文，用户需要自行保存该密文，KMS不托管用户的数据密钥。可以通过Decrypt接口从CiphertextBlob中获取数据密钥DataKey明文 */
  CiphertextBlob?: string;
  /** DataKey的全局唯一标识,当KMS托管数据密钥时返回。 */
  DataKeyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GenerateRandomRequest {
  /** 生成的随机数的长度。最小值为1， 最大值为1024。 */
  NumberOfBytes: number;
}

declare interface GenerateRandomResponse {
  /** 生成的随机数的明文，该明文使用base64编码，用户需要使用base64解码得到明文。 */
  Plaintext: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDataKeyCiphertextBlobRequest {
  /** 数据密钥的唯一标志符 */
  DataKeyId: string;
}

declare interface GetDataKeyCiphertextBlobResponse {
  /** 数据密钥的密文 */
  CiphertextBlob?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDataKeyPlaintextRequest {
  /** 数据密钥的唯一标志符 */
  DataKeyId: string;
  /** PEM 格式公钥字符串，支持 RSA2048 和 SM2 公钥，用于对返回数据中的 Plaintext 值进行加密。若为空，则不对 Plaintext 值加密。 */
  EncryptionPublicKey?: string;
  /** 非对称加密算法，配合 EncryptionPublicKey 对返回数据进行加密。目前支持：SM2（以 C1C3C2 格式返回密文），SM2_C1C3C2_ASN1 （以 C1C3C2 ASN1 格式返回密文），RSAES_PKCS1_V1_5，RSAES_OAEP_SHA_1，RSAES_OAEP_SHA_256。若为空，则默认为 SM2。 */
  EncryptionAlgorithm?: string;
}

declare interface GetDataKeyPlaintextResponse {
  /** 若调用时未提供 EncryptionPublicKey，该字段值为 Base64 编码的明文，需进行 Base64 解码以获取明文。 若调用时提供了 EncryptionPublicKey，则该字段值为使用 EncryptionPublicKey 公钥进行非对称加密后的 Base64 编码的密文。需在 Base64 解码后，使用用户上传的公钥对应的私钥进行进一步解密，以获取明文。 */
  Plaintext?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetKeyRotationStatusRequest {
  /** CMK唯一标识符 */
  KeyId: string;
}

declare interface GetKeyRotationStatusResponse {
  /** 密钥轮换是否开启 */
  KeyRotationEnabled?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetParametersForImportRequest {
  /** CMK的唯一标识，获取密钥参数的CMK必须是EXTERNAL类型，即在CreateKey时指定Type=2 类型的CMK。 */
  KeyId: string;
  /** 指定加密密钥材料的算法，目前支持RSAES_PKCS1_V1_5、RSAES_OAEP_SHA_1、RSAES_OAEP_SHA_256 */
  WrappingAlgorithm: string;
  /** 指定加密密钥材料的类型，目前只支持RSA_2048 */
  WrappingKeySpec: string;
}

declare interface GetParametersForImportResponse {
  /** CMK的唯一标识，用于指定目标导入密钥材料的CMK。 */
  KeyId: string;
  /** 导入密钥材料需要的token，用于作为 ImportKeyMaterial 的参数。 */
  ImportToken: string;
  /** 用于加密密钥材料的RSA公钥，base64编码。使用PublicKey base64解码后的公钥将导入密钥进行加密后作为 ImportKeyMaterial 的参数。 */
  PublicKey: string;
  /** 该导出token和公钥的有效期，超过该时间后无法导入，需要重新调用GetParametersForImport获取。 */
  ParametersValidTo: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetPublicKeyRequest {
  /** CMK的唯一标识。 */
  KeyId: string;
}

declare interface GetPublicKeyResponse {
  /** CMK的唯一标识。 */
  KeyId: string;
  /** 经过base64编码的公钥内容。 */
  PublicKey: string;
  /** PEM格式的公钥内容。 */
  PublicKeyPem: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRegionsRequest {
}

declare interface GetRegionsResponse {
  /** 可用region列表 */
  Regions?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetServiceStatusRequest {
}

declare interface GetServiceStatusResponse {
  /** KMS服务是否开通， true 表示已开通 */
  ServiceEnabled?: boolean;
  /** 服务不可用类型： 0-未购买，1-正常， 2-欠费停服， 3-资源释放 */
  InvalidType?: number;
  /** 0-普通版，1-旗舰版 */
  UserLevel?: number;
  /** 旗舰版到期时间（Epoch Unix Timestamp）。 */
  ProExpireTime?: number;
  /** 旗舰版是否自动续费：0-不自动续费，1-自动续费 */
  ProRenewFlag?: number;
  /** 旗舰版购买记录的唯一性标识。如果未开通旗舰版，则返回值为空 */
  ProResourceId?: string;
  /** 是否开通 KMS 托管版 */
  ExclusiveVSMEnabled?: boolean;
  /** 是否开通 KMS 独享版 */
  ExclusiveHSMEnabled?: boolean;
  /** KMS 订阅信息。 */
  SubscriptionInfo?: string;
  /** 返回KMS用户密钥使用数量 */
  CmkUserCount?: number;
  /** 返回KMS用户密钥规格数量 */
  CmkLimit?: number;
  /** 返回独享集群组 */
  ExclusiveHSMList?: ExclusiveHSM[];
  /** 是否支持数据密钥托管。1:支持，0:不支持。 */
  IsAllowedDataKeyHosted?: boolean;
  /** IsAllowedDataKeyHosted为1时有效，数据密钥的购买额度 */
  DataKeyLimit?: number;
  /** IsAllowedDataKeyHosted为1时有效，数据密钥免费额度。 */
  FreeDataKeyLimit?: number;
  /** IsAllowedDataKeyHosted为1时有效，已使用的数据密钥数量。 */
  DataKeyUsedCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportDataKeyRequest {
  /** 数据密钥的名称 */
  DataKeyName: string;
  /** 如果导入的是明文数据密钥，则是base64 转换后的明文数据密钥， 如果导入的是密文数据密钥，则是由KMS GenerateDataKey接口生成的密文数据密钥。 */
  ImportKeyMaterial: string;
  /** 1:密文导入(由KMS接口生成的密文数据密钥)，2:明文导入。 */
  ImportType: number;
  /** 数据密钥 的描述，最大100字节 */
  Description?: string;
  /** 当导入密文数据密钥时，无需传入根密钥,如果传入会校验此KeyId是否和密文中一致。当导入明文数据密钥，KeyId 不能为空，会根据指定的根密钥加密数据密钥。 */
  KeyId?: string;
  /** KMS 独享版对应的 HSM 集群 ID。如果指定HsmClusterId，表明根密钥在此集群里，会校验KeyId是否和HsmClusterId对应。 */
  HsmClusterId?: string;
}

declare interface ImportDataKeyResponse {
  /** CMK的全局唯一标识 */
  KeyId?: string;
  /** DataKey的全局唯一标识 否 官网/国内&国际站展示 */
  DataKeyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportKeyMaterialRequest {
  /** 使用GetParametersForImport 返回的PublicKey加密后的密钥材料base64编码。对于国密版本region的KMS，导入的密钥材料长度要求为 128 bit，FIPS版本region的KMS， 导入的密钥材料长度要求为 256 bit。 */
  EncryptedKeyMaterial: string;
  /** 通过调用GetParametersForImport获得的导入令牌。 */
  ImportToken: string;
  /** 指定导入密钥材料的CMK，需要和GetParametersForImport 指定的CMK相同。 */
  KeyId: string;
  /** 密钥材料过期时间 unix 时间戳，不指定或者 0 表示密钥材料不会过期，若指定过期时间，需要大于当前时间点，最大支持 2147443200。 */
  ValidTo?: number;
}

declare interface ImportKeyMaterialResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAlgorithmsRequest {
}

declare interface ListAlgorithmsResponse {
  /** 本地区支持的对称加密算法 */
  SymmetricAlgorithms?: AlgorithmInfo[];
  /** 本地区支持的非对称加密算法 */
  AsymmetricAlgorithms?: AlgorithmInfo[];
  /** 本地区支持的非对称签名验签算法 */
  AsymmetricSignVerifyAlgorithms?: AlgorithmInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDataKeyDetailRequest {
  /** 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0 */
  Offset?: number;
  /** 含义跟 SQL 查询的 Limit 一致，表示本次最多获取 Limit 个元素。缺省值为10，最大值为200 */
  Limit?: number;
  /** 根据创建者角色筛选，默认 0 表示用户自己创建的数据密钥， 1 表示授权其它云产品自动创建的数据密钥 */
  Role?: number;
  /** 根据DataKey创建时间排序， 0 表示按照降序排序，1表示按照升序排序 */
  OrderType?: number;
  /** 根据DataKey状态筛选， 0表示全部DataKey， 1 表示仅查询Enabled DataKey， 2 表示仅查询Disabled DataKey，3 表示查询PendingDelete 状态的DataKey(处于计划删除状态的Key)。 */
  KeyState?: number;
  /** 根据DataKeyId或者DataKeyName进行模糊匹配查询 */
  SearchKeyAlias?: string;
  /** 根据DateKey类型筛选， "TENCENT_KMS" 表示筛选密钥材料由KMS创建的数据密钥， "EXTERNAL" 表示筛选密钥材料需要用户导入的 EXTERNAL类型数据密钥，"ALL" 或者不设置表示两种类型都查询，大小写敏感。 */
  Origin?: string;
  /** KMS 高级版对应的 HSM 集群 ID。 */
  HsmClusterId?: string;
  /** 根密钥全局唯一标识符 */
  KeyId?: string;
  /** 数据密钥的长度 */
  DataKeyLen?: number;
}

declare interface ListDataKeyDetailResponse {
  /** 返回的属性信息列表。 */
  DataKeyMetadatas?: DataKeyMetadata[];
  /** DataKey的总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDataKeysRequest {
  /** 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0 */
  Offset?: number;
  /** 含义跟 SQL 查询的 Limit 一致，表示本次最多获取 Limit 个元素。缺省值为10，最大值为200 */
  Limit?: number;
  /** 根据创建者角色筛选，默认 0 表示用户自己创建的数据密钥， 1 表示授权其它云产品自动创建的数据密钥 */
  Role?: number;
  /** KMS 高级版对应的 HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效） */
  HsmClusterId?: string;
}

declare interface ListDataKeysResponse {
  /** 数据密钥Id列表数组 */
  DataKeys?: DataKey[];
  /** 数据密钥的总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListKeyDetailRequest {
  /** 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0 */
  Offset?: number;
  /** 含义跟 SQL 查询的 Limit 一致，表示本次最多获取 Limit 个元素。缺省值为10，最大值为200 */
  Limit?: number;
  /** 根据创建者角色筛选，默认 0 表示用户自己创建的cmk， 1 表示授权其它云产品自动创建的cmk */
  Role?: number;
  /** 根据CMK创建时间排序， 0 表示按照降序排序，1表示按照升序排序 */
  OrderType?: number;
  /** 根据CMK状态筛选， 0表示全部CMK， 1 表示仅查询Enabled CMK， 2 表示仅查询Disabled CMK，3 表示查询PendingDelete 状态的CMK(处于计划删除状态的Key)，4 表示查询 PendingImport 状态的CMK，5 表示查询 Archived 状态的 CMK */
  KeyState?: number;
  /** 根据KeyId或者Alias进行模糊匹配查询 */
  SearchKeyAlias?: string;
  /** 根据CMK类型筛选， "TENCENT_KMS" 表示筛选密钥材料由KMS创建的CMK， "EXTERNAL" 表示筛选密钥材料需要用户导入的 EXTERNAL类型CMK，"ALL" 或者不设置表示两种类型都查询，大小写敏感。 */
  Origin?: string;
  /** 根据CMK的KeyUsage筛选，ALL表示筛选全部，可使用的参数为：ALL 或 ENCRYPT_DECRYPT 或 ASYMMETRIC_DECRYPT_RSA_2048 或 ASYMMETRIC_DECRYPT_SM2 或 ASYMMETRIC_SIGN_VERIFY_SM2 或 ASYMMETRIC_SIGN_VERIFY_RSA_2048 或 ASYMMETRIC_SIGN_VERIFY_ECC，为空则默认筛选ENCRYPT_DECRYPT类型 */
  KeyUsage?: string;
  /** 标签过滤条件 */
  TagFilters?: TagFilter[];
  /** KMS 高级版对应的 HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）。 */
  HsmClusterId?: string;
}

declare interface ListKeyDetailResponse {
  /** CMK的总数量 */
  TotalCount?: number;
  /** 返回的属性信息列表。 */
  KeyMetadatas?: KeyMetadata[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListKeysRequest {
  /** 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0 */
  Offset?: number;
  /** 含义跟 SQL 查询的 Limit 一致，表示本次获最多获取 Limit 个元素。缺省值为10，最大值为200 */
  Limit?: number;
  /** 根据创建者角色筛选，默认 0 表示用户自己创建的cmk， 1 表示授权其它云产品自动创建的cmk */
  Role?: number;
  /** KMS 高级版对应的 HSM 集群 ID（仅对 KMS 独占版/托管版服务实例有效）。 */
  HsmClusterId?: string;
}

declare interface ListKeysResponse {
  /** CMK列表数组 */
  Keys?: Key[];
  /** CMK的总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OverwriteWhiteBoxDeviceFingerprintsRequest {
  /** 白盒密钥ID */
  KeyId: string;
  /** 设备指纹列表，如果列表为空，则表示删除该密钥对应的所有指纹信息。列表最大长度不超过200。 */
  DeviceFingerprints?: DeviceFingerprint[];
}

declare interface OverwriteWhiteBoxDeviceFingerprintsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PostQuantumCryptoDecryptRequest {
  /** 待解密的密文数据 */
  CiphertextBlob: string;
  /** PEM 格式公钥字符串，支持 RSA2048 和 SM2 公钥，用于对返回数据中的 Plaintext 值进行加密。若为空，则不对 Plaintext 值加密。 */
  EncryptionPublicKey?: string;
  /** 非对称加密算法，配合 EncryptionPublicKey 对返回数据进行加密。目前支持：SM2（以 C1C3C2 格式返回密文），SM2_C1C3C2_ASN1 （以 C1C3C2 ASN1 格式返回密文），RSAES_PKCS1_V1_5，RSAES_OAEP_SHA_1，RSAES_OAEP_SHA_256。若为空，则默认为 SM2。 */
  EncryptionAlgorithm?: string;
}

declare interface PostQuantumCryptoDecryptResponse {
  /** CMK的全局唯一标识 */
  KeyId?: string;
  /** 若调用时未提供 EncryptionPublicKey，该字段值为 Base64 编码的明文，需进行 Base64 解码以获取明文。若调用时提供了 EncryptionPublicKey，则该字段值为使用 EncryptionPublicKey 公钥进行非对称加密后的 Base64 编码的密文。需在 Base64 解码后，使用用户上传的公钥对应的私钥进行进一步解密，以获取明文。 */
  PlainText?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PostQuantumCryptoEncryptRequest {
  /** 调用CreateKey生成的CMK全局唯一标识符 */
  KeyId: string;
  /** 被加密的明文数据，该字段必须使用base64编码，原文最大长度支持4K */
  PlainText: string;
}

declare interface PostQuantumCryptoEncryptResponse {
  /** 加密后的密文，base64编码。注意：本字段中打包了密文和密钥的相关信息，不是对明文的直接加密结果，只有将该字段作为PostQuantumCryptoDecrypt接口的输入参数，才可以解密出原文。 */
  CiphertextBlob?: string;
  /** 加密使用的CMK的全局唯一标识 */
  KeyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PostQuantumCryptoSignRequest {
  /** Base64 编码的消息原文。消息原文的长度（Base64编码前的长度）不超过4096字节。 */
  Message: string;
  /** 密钥的唯一标识 */
  KeyId: string;
}

declare interface PostQuantumCryptoSignResponse {
  /** 签名值，Base64编码。可使用 PostQuantumCryptoVerify接口对签名值进行验证。 */
  Signature?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PostQuantumCryptoVerifyRequest {
  /** 密钥的唯一标识 */
  KeyId: string;
  /** 签名值，通过调用KMS PostQuantumCryptoSign签名接口生成 */
  SignatureValue: string;
  /** Base64 编码的消息原文，消息原文的长度（Base64编码前的长度）不超过4096字节。 */
  Message: string;
}

declare interface PostQuantumCryptoVerifyResponse {
  /** 签名是否有效。true：签名有效，false：签名无效。 */
  SignatureValid?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReEncryptRequest {
  /** 需要重新加密的密文 */
  CiphertextBlob: string;
  /** 重新加密使用的CMK，如果为空，则使用密文原有的CMK重新加密（若密钥没有轮换则密文不会刷新） */
  DestinationKeyId?: string;
  /** CiphertextBlob 密文加密时使用的key/value对的json字符串。如果加密时未使用，则为空 */
  SourceEncryptionContext?: string;
  /** 重新加密使用的key/value对的json字符串，如果使用该字段，则返回的新密文在解密时需要填入相同的字符串 */
  DestinationEncryptionContext?: string;
}

declare interface ReEncryptResponse {
  /** 重新加密后的密文 */
  CiphertextBlob?: string;
  /** 重新加密使用的CMK */
  KeyId?: string;
  /** 重新加密前密文使用的CMK */
  SourceKeyId?: string;
  /** true表示密文已经重新加密。同一个CMK进行重加密，在密钥没有发生轮换的情况下不会进行实际重新加密操作，返回原密文 */
  ReEncrypted?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScheduleDataKeyDeletionRequest {
  /** 数据密钥的唯一标志符 */
  DataKeyId: string;
  /** 计划删除时间区间[7,30] */
  PendingWindowInDays: number;
}

declare interface ScheduleDataKeyDeletionResponse {
  /** 计划删除执行时间 */
  DeletionDate?: number;
  /** 唯一标志被计划删除的数据密钥 */
  DataKeyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScheduleKeyDeletionRequest {
  /** CMK的唯一标志 */
  KeyId: string;
  /** 计划删除时间区间[7,30] */
  PendingWindowInDays: number;
}

declare interface ScheduleKeyDeletionResponse {
  /** 计划删除执行时间 */
  DeletionDate?: number;
  /** 唯一标志被计划删除的CMK */
  KeyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SignByAsymmetricKeyRequest {
  /** 签名算法，支持的算法：SM2DSA，ECC_P256_R1，RSA_PSS_SHA_256，RSA_PKCS1_SHA_256 等。更多支持的算法可通过 ListAlgorithms 接口进行查询。 */
  Algorithm: string;
  /** 消息原文或消息摘要。如果提供的是消息原文，则消息原文的长度（Base64编码前的长度）不超过4096字节。如果提供的是消息摘要，消息摘要长度（Base64编码前的长度）必须等于32字节 */
  Message: string;
  /** 密钥的唯一标识 */
  KeyId: string;
  /** 消息类型：RAW，DIGEST，如果不传，默认为RAW，表示消息原文。 */
  MessageType?: string;
}

declare interface SignByAsymmetricKeyResponse {
  /** 签名，Base64编码 */
  Signature?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindCloudResourceRequest {
  /** cmk的ID */
  KeyId: string;
  /** 云产品的唯一性标识符 */
  ProductId: string;
  /** 资源/实例ID，由调用方根据自己的云产品特征来定义，以字符串形式做存储。 */
  ResourceId: string;
}

declare interface UnbindCloudResourceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAliasRequest {
  /** 新的别名，1-60个字符或数字的组合 */
  Alias: string;
  /** CMK的全局唯一标识符 */
  KeyId: string;
}

declare interface UpdateAliasResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDataKeyDescriptionRequest {
  /** 数据密钥的唯一标志符 */
  DataKeyId: string;
  /** 数据密钥 的描述，最大100字节 */
  Description: string;
}

declare interface UpdateDataKeyDescriptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDataKeyNameRequest {
  /** 数据密钥的唯一标志符 */
  DataKeyId: string;
  /** 数据密钥的名称 */
  DataKeyName: string;
}

declare interface UpdateDataKeyNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateKeyDescriptionRequest {
  /** 新的描述信息，最大支持1024字节 */
  Description: string;
  /** 需要修改描述信息的CMK ID */
  KeyId: string;
}

declare interface UpdateKeyDescriptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyByAsymmetricKeyRequest {
  /** 密钥的唯一标识 */
  KeyId: string;
  /** 签名值，通过调用KMS签名接口生成 */
  SignatureValue: string;
  /** 消息原文或消息摘要。如果提供的是消息原文，则消息原文的长度（Base64编码前的长度）不超过4096字节。如果提供的是消息摘要，则消息摘要长度（Base64编码前的长度）必须等于32字节 */
  Message: string;
  /** 签名算法，支持的算法：SM2DSA，ECC_P256_R1，RSA_PSS_SHA_256，RSA_PKCS1_SHA_256 等。更多支持的算法可通过 ListAlgorithms 接口进行查询。 */
  Algorithm: string;
  /** 消息类型：RAW，DIGEST，如果不传，默认为RAW，表示消息原文。 */
  MessageType?: string;
}

declare interface VerifyByAsymmetricKeyResponse {
  /** 签名是否有效。true：签名有效，false：签名无效。 */
  SignatureValid?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Kms 密钥管理系统} */
declare interface Kms {
  (): Versions;
  /** 密钥归档 {@link ArchiveKeyRequest} {@link ArchiveKeyResponse} */
  ArchiveKey(data: ArchiveKeyRequest, config?: AxiosRequestConfig): AxiosPromise<ArchiveKeyResponse>;
  /** 非对称密钥RSA解密 {@link AsymmetricRsaDecryptRequest} {@link AsymmetricRsaDecryptResponse} */
  AsymmetricRsaDecrypt(data: AsymmetricRsaDecryptRequest, config?: AxiosRequestConfig): AxiosPromise<AsymmetricRsaDecryptResponse>;
  /** 非对称密钥Sm2解密 {@link AsymmetricSm2DecryptRequest} {@link AsymmetricSm2DecryptResponse} */
  AsymmetricSm2Decrypt(data: AsymmetricSm2DecryptRequest, config?: AxiosRequestConfig): AxiosPromise<AsymmetricSm2DecryptResponse>;
  /** 绑定密钥和云产品资源的使用关系 {@link BindCloudResourceRequest} {@link BindCloudResourceResponse} */
  BindCloudResource(data: BindCloudResourceRequest, config?: AxiosRequestConfig): AxiosPromise<BindCloudResourceResponse>;
  /** 取消计划删除数据密钥 {@link CancelDataKeyDeletionRequest} {@link CancelDataKeyDeletionResponse} */
  CancelDataKeyDeletion(data: CancelDataKeyDeletionRequest, config?: AxiosRequestConfig): AxiosPromise<CancelDataKeyDeletionResponse>;
  /** 取消密钥归档 {@link CancelKeyArchiveRequest} {@link CancelKeyArchiveResponse} */
  CancelKeyArchive(data: CancelKeyArchiveRequest, config?: AxiosRequestConfig): AxiosPromise<CancelKeyArchiveResponse>;
  /** 取消CMK计划删除操作 {@link CancelKeyDeletionRequest} {@link CancelKeyDeletionResponse} */
  CancelKeyDeletion(data: CancelKeyDeletionRequest, config?: AxiosRequestConfig): AxiosPromise<CancelKeyDeletionResponse>;
  /** 创建主密钥 {@link CreateKeyRequest} {@link CreateKeyResponse} */
  CreateKey(data: CreateKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateKeyResponse>;
  /** 创建白盒密钥 {@link CreateWhiteBoxKeyRequest} {@link CreateWhiteBoxKeyResponse} */
  CreateWhiteBoxKey(data: CreateWhiteBoxKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWhiteBoxKeyResponse>;
  /** 解密 {@link DecryptRequest} {@link DecryptResponse} */
  Decrypt(data: DecryptRequest, config?: AxiosRequestConfig): AxiosPromise<DecryptResponse>;
  /** 删除导入的密钥材料 {@link DeleteImportedKeyMaterialRequest} {@link DeleteImportedKeyMaterialResponse} */
  DeleteImportedKeyMaterial(data: DeleteImportedKeyMaterialRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImportedKeyMaterialResponse>;
  /** 删除白盒密钥 {@link DeleteWhiteBoxKeyRequest} {@link DeleteWhiteBoxKeyResponse} */
  DeleteWhiteBoxKey(data: DeleteWhiteBoxKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWhiteBoxKeyResponse>;
  /** 获取数据密钥的详情 {@link DescribeDataKeyRequest} {@link DescribeDataKeyResponse} */
  DescribeDataKey(data: DescribeDataKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataKeyResponse>;
  /** 获取数据密钥的详情列表 {@link DescribeDataKeysRequest} {@link DescribeDataKeysResponse} */
  DescribeDataKeys(data: DescribeDataKeysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataKeysResponse>;
  /** 获取主密钥属性 {@link DescribeKeyRequest} {@link DescribeKeyResponse} */
  DescribeKey(data: DescribeKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKeyResponse>;
  /** 获取多个主密钥属性 {@link DescribeKeysRequest} {@link DescribeKeysResponse} */
  DescribeKeys(data: DescribeKeysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKeysResponse>;
  /** 获取白盒解密密钥 {@link DescribeWhiteBoxDecryptKeyRequest} {@link DescribeWhiteBoxDecryptKeyResponse} */
  DescribeWhiteBoxDecryptKey(data: DescribeWhiteBoxDecryptKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWhiteBoxDecryptKeyResponse>;
  /** 获取指定密钥的设备指纹列表 {@link DescribeWhiteBoxDeviceFingerprintsRequest} {@link DescribeWhiteBoxDeviceFingerprintsResponse} */
  DescribeWhiteBoxDeviceFingerprints(data: DescribeWhiteBoxDeviceFingerprintsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWhiteBoxDeviceFingerprintsResponse>;
  /** 展示白盒密钥的信息 {@link DescribeWhiteBoxKeyRequest} {@link DescribeWhiteBoxKeyResponse} */
  DescribeWhiteBoxKey(data: DescribeWhiteBoxKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWhiteBoxKeyResponse>;
  /** 获取白盒密钥列表 {@link DescribeWhiteBoxKeyDetailsRequest} {@link DescribeWhiteBoxKeyDetailsResponse} */
  DescribeWhiteBoxKeyDetails(data?: DescribeWhiteBoxKeyDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWhiteBoxKeyDetailsResponse>;
  /** 获取白盒密钥服务状态 {@link DescribeWhiteBoxServiceStatusRequest} {@link DescribeWhiteBoxServiceStatusResponse} */
  DescribeWhiteBoxServiceStatus(data?: DescribeWhiteBoxServiceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWhiteBoxServiceStatusResponse>;
  /** 禁用数据密钥 {@link DisableDataKeyRequest} {@link DisableDataKeyResponse} */
  DisableDataKey(data: DisableDataKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DisableDataKeyResponse>;
  /** 批量禁用数据密钥 {@link DisableDataKeysRequest} {@link DisableDataKeysResponse} */
  DisableDataKeys(data: DisableDataKeysRequest, config?: AxiosRequestConfig): AxiosPromise<DisableDataKeysResponse>;
  /** 禁用主密钥 {@link DisableKeyRequest} {@link DisableKeyResponse} */
  DisableKey(data: DisableKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DisableKeyResponse>;
  /** 禁止密钥轮换 {@link DisableKeyRotationRequest} {@link DisableKeyRotationResponse} */
  DisableKeyRotation(data: DisableKeyRotationRequest, config?: AxiosRequestConfig): AxiosPromise<DisableKeyRotationResponse>;
  /** 批量禁用主密钥 {@link DisableKeysRequest} {@link DisableKeysResponse} */
  DisableKeys(data: DisableKeysRequest, config?: AxiosRequestConfig): AxiosPromise<DisableKeysResponse>;
  /** 禁用白盒密钥 {@link DisableWhiteBoxKeyRequest} {@link DisableWhiteBoxKeyResponse} */
  DisableWhiteBoxKey(data: DisableWhiteBoxKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DisableWhiteBoxKeyResponse>;
  /** 批量禁用白盒密钥 {@link DisableWhiteBoxKeysRequest} {@link DisableWhiteBoxKeysResponse} */
  DisableWhiteBoxKeys(data: DisableWhiteBoxKeysRequest, config?: AxiosRequestConfig): AxiosPromise<DisableWhiteBoxKeysResponse>;
  /** 启用数据密钥 {@link EnableDataKeyRequest} {@link EnableDataKeyResponse} */
  EnableDataKey(data: EnableDataKeyRequest, config?: AxiosRequestConfig): AxiosPromise<EnableDataKeyResponse>;
  /** 批量启用数据密钥 {@link EnableDataKeysRequest} {@link EnableDataKeysResponse} */
  EnableDataKeys(data: EnableDataKeysRequest, config?: AxiosRequestConfig): AxiosPromise<EnableDataKeysResponse>;
  /** 启用主密钥 {@link EnableKeyRequest} {@link EnableKeyResponse} */
  EnableKey(data: EnableKeyRequest, config?: AxiosRequestConfig): AxiosPromise<EnableKeyResponse>;
  /** 开启密钥轮换 {@link EnableKeyRotationRequest} {@link EnableKeyRotationResponse} */
  EnableKeyRotation(data: EnableKeyRotationRequest, config?: AxiosRequestConfig): AxiosPromise<EnableKeyRotationResponse>;
  /** 批量启动主密钥 {@link EnableKeysRequest} {@link EnableKeysResponse} */
  EnableKeys(data: EnableKeysRequest, config?: AxiosRequestConfig): AxiosPromise<EnableKeysResponse>;
  /** 启用白盒密钥 {@link EnableWhiteBoxKeyRequest} {@link EnableWhiteBoxKeyResponse} */
  EnableWhiteBoxKey(data: EnableWhiteBoxKeyRequest, config?: AxiosRequestConfig): AxiosPromise<EnableWhiteBoxKeyResponse>;
  /** 批量启用白盒密钥 {@link EnableWhiteBoxKeysRequest} {@link EnableWhiteBoxKeysResponse} */
  EnableWhiteBoxKeys(data: EnableWhiteBoxKeysRequest, config?: AxiosRequestConfig): AxiosPromise<EnableWhiteBoxKeysResponse>;
  /** 加密 {@link EncryptRequest} {@link EncryptResponse} */
  Encrypt(data: EncryptRequest, config?: AxiosRequestConfig): AxiosPromise<EncryptResponse>;
  /** 使用白盒密钥进行加密 {@link EncryptByWhiteBoxRequest} {@link EncryptByWhiteBoxResponse} */
  EncryptByWhiteBox(data: EncryptByWhiteBoxRequest, config?: AxiosRequestConfig): AxiosPromise<EncryptByWhiteBoxResponse>;
  /** 生成数据密钥 {@link GenerateDataKeyRequest} {@link GenerateDataKeyResponse} */
  GenerateDataKey(data: GenerateDataKeyRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateDataKeyResponse>;
  /** 随机数生成接口 {@link GenerateRandomRequest} {@link GenerateRandomResponse} */
  GenerateRandom(data: GenerateRandomRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateRandomResponse>;
  /** 下载数据密钥密文 {@link GetDataKeyCiphertextBlobRequest} {@link GetDataKeyCiphertextBlobResponse} */
  GetDataKeyCiphertextBlob(data: GetDataKeyCiphertextBlobRequest, config?: AxiosRequestConfig): AxiosPromise<GetDataKeyCiphertextBlobResponse>;
  /** 获取数据密钥明文 {@link GetDataKeyPlaintextRequest} {@link GetDataKeyPlaintextResponse} */
  GetDataKeyPlaintext(data: GetDataKeyPlaintextRequest, config?: AxiosRequestConfig): AxiosPromise<GetDataKeyPlaintextResponse>;
  /** 查询密钥轮换状态 {@link GetKeyRotationStatusRequest} {@link GetKeyRotationStatusResponse} */
  GetKeyRotationStatus(data: GetKeyRotationStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetKeyRotationStatusResponse>;
  /** 获取导入主密钥（CMK）材料的参数 {@link GetParametersForImportRequest} {@link GetParametersForImportResponse} */
  GetParametersForImport(data: GetParametersForImportRequest, config?: AxiosRequestConfig): AxiosPromise<GetParametersForImportResponse>;
  /** 获取非对称密钥的公钥 {@link GetPublicKeyRequest} {@link GetPublicKeyResponse} */
  GetPublicKey(data: GetPublicKeyRequest, config?: AxiosRequestConfig): AxiosPromise<GetPublicKeyResponse>;
  /** 获取可以提供KMS服务的地域列表 {@link GetRegionsRequest} {@link GetRegionsResponse} */
  GetRegions(data?: GetRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<GetRegionsResponse>;
  /** 查询服务状态 {@link GetServiceStatusRequest} {@link GetServiceStatusResponse} */
  GetServiceStatus(data?: GetServiceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetServiceStatusResponse>;
  /** 导入数据密钥 {@link ImportDataKeyRequest} {@link ImportDataKeyResponse} */
  ImportDataKey(data: ImportDataKeyRequest, config?: AxiosRequestConfig): AxiosPromise<ImportDataKeyResponse>;
  /** 导入密钥材料 {@link ImportKeyMaterialRequest} {@link ImportKeyMaterialResponse} */
  ImportKeyMaterial(data: ImportKeyMaterialRequest, config?: AxiosRequestConfig): AxiosPromise<ImportKeyMaterialResponse>;
  /** 列出当前Region支持的加密方式 {@link ListAlgorithmsRequest} {@link ListAlgorithmsResponse} */
  ListAlgorithms(data?: ListAlgorithmsRequest, config?: AxiosRequestConfig): AxiosPromise<ListAlgorithmsResponse>;
  /** 获取数据密钥列表详情 {@link ListDataKeyDetailRequest} {@link ListDataKeyDetailResponse} */
  ListDataKeyDetail(data?: ListDataKeyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ListDataKeyDetailResponse>;
  /** 获取数据密钥的列表 {@link ListDataKeysRequest} {@link ListDataKeysResponse} */
  ListDataKeys(data?: ListDataKeysRequest, config?: AxiosRequestConfig): AxiosPromise<ListDataKeysResponse>;
  /** 获取主密钥列表详情 {@link ListKeyDetailRequest} {@link ListKeyDetailResponse} */
  ListKeyDetail(data?: ListKeyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ListKeyDetailResponse>;
  /** 获取主密钥列表 {@link ListKeysRequest} {@link ListKeysResponse} */
  ListKeys(data?: ListKeysRequest, config?: AxiosRequestConfig): AxiosPromise<ListKeysResponse>;
  /** 覆盖指定密钥的设备指纹信息 {@link OverwriteWhiteBoxDeviceFingerprintsRequest} {@link OverwriteWhiteBoxDeviceFingerprintsResponse} */
  OverwriteWhiteBoxDeviceFingerprints(data: OverwriteWhiteBoxDeviceFingerprintsRequest, config?: AxiosRequestConfig): AxiosPromise<OverwriteWhiteBoxDeviceFingerprintsResponse>;
  /** 后量子密码算法解密 {@link PostQuantumCryptoDecryptRequest} {@link PostQuantumCryptoDecryptResponse} */
  PostQuantumCryptoDecrypt(data: PostQuantumCryptoDecryptRequest, config?: AxiosRequestConfig): AxiosPromise<PostQuantumCryptoDecryptResponse>;
  /** 后量子密码算法加密 {@link PostQuantumCryptoEncryptRequest} {@link PostQuantumCryptoEncryptResponse} */
  PostQuantumCryptoEncrypt(data: PostQuantumCryptoEncryptRequest, config?: AxiosRequestConfig): AxiosPromise<PostQuantumCryptoEncryptResponse>;
  /** 后量子密码算法签名 {@link PostQuantumCryptoSignRequest} {@link PostQuantumCryptoSignResponse} */
  PostQuantumCryptoSign(data: PostQuantumCryptoSignRequest, config?: AxiosRequestConfig): AxiosPromise<PostQuantumCryptoSignResponse>;
  /** 后量子密码算法验签 {@link PostQuantumCryptoVerifyRequest} {@link PostQuantumCryptoVerifyResponse} */
  PostQuantumCryptoVerify(data: PostQuantumCryptoVerifyRequest, config?: AxiosRequestConfig): AxiosPromise<PostQuantumCryptoVerifyResponse>;
  /** 密文刷新 {@link ReEncryptRequest} {@link ReEncryptResponse} */
  ReEncrypt(data: ReEncryptRequest, config?: AxiosRequestConfig): AxiosPromise<ReEncryptResponse>;
  /** 计划删除数据密钥 {@link ScheduleDataKeyDeletionRequest} {@link ScheduleDataKeyDeletionResponse} */
  ScheduleDataKeyDeletion(data: ScheduleDataKeyDeletionRequest, config?: AxiosRequestConfig): AxiosPromise<ScheduleDataKeyDeletionResponse>;
  /** CMK计划删除接口 {@link ScheduleKeyDeletionRequest} {@link ScheduleKeyDeletionResponse} */
  ScheduleKeyDeletion(data: ScheduleKeyDeletionRequest, config?: AxiosRequestConfig): AxiosPromise<ScheduleKeyDeletionResponse>;
  /** 签名 {@link SignByAsymmetricKeyRequest} {@link SignByAsymmetricKeyResponse} */
  SignByAsymmetricKey(data: SignByAsymmetricKeyRequest, config?: AxiosRequestConfig): AxiosPromise<SignByAsymmetricKeyResponse>;
  /** 解绑CMK和云资源的关联关系 {@link UnbindCloudResourceRequest} {@link UnbindCloudResourceResponse} */
  UnbindCloudResource(data: UnbindCloudResourceRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindCloudResourceResponse>;
  /** 修改别名 {@link UpdateAliasRequest} {@link UpdateAliasResponse} */
  UpdateAlias(data: UpdateAliasRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAliasResponse>;
  /** 修改数据密钥描述 {@link UpdateDataKeyDescriptionRequest} {@link UpdateDataKeyDescriptionResponse} */
  UpdateDataKeyDescription(data: UpdateDataKeyDescriptionRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDataKeyDescriptionResponse>;
  /** 修改数据密钥名称 {@link UpdateDataKeyNameRequest} {@link UpdateDataKeyNameResponse} */
  UpdateDataKeyName(data: UpdateDataKeyNameRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDataKeyNameResponse>;
  /** 修改主密钥描述信息 {@link UpdateKeyDescriptionRequest} {@link UpdateKeyDescriptionResponse} */
  UpdateKeyDescription(data: UpdateKeyDescriptionRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateKeyDescriptionResponse>;
  /** 验证签名 {@link VerifyByAsymmetricKeyRequest} {@link VerifyByAsymmetricKeyResponse} */
  VerifyByAsymmetricKey(data: VerifyByAsymmetricKeyRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyByAsymmetricKeyResponse>;
}

export declare type Versions = ["2019-01-18"];

export default Kms;
